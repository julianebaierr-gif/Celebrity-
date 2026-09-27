import https from "https";

/**
 * Complete Gemini Model Fallback Cascade.
 * Ordered strictly from the highest (Gemini 3.8 Flash) down to the lowest available version.
 */
export const GEMINI_MODEL_CASCADE = [
  "gemini-3.8-flash",
  "gemini-3.7-flash",
  "gemini-3.6-flash",
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
  "gemini-3.1-pro-preview",
  "gemini-3.1-flash-lite",
  "gemini-3-flash-preview",
  "gemini-2.5-pro",
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash",
  "gemini-flash-latest",
  "gemini-pro-latest",
] as const;

export type GeminiModelName = typeof GEMINI_MODEL_CASCADE[number];

export interface GeminiGenerateOptions {
  temperature?: number;
  maxOutputTokens?: number;
  systemInstruction?: string;
  apiKey?: string;
}

export interface GeminiResponse {
  text: string;
  modelUsed: string;
  attempts: { model: string; status: number | string; error?: string }[];
}

/**
 * Calls a specific Gemini model via the Google AI API.
 */
async function callGeminiModel(
  model: string,
  prompt: string,
  options: GeminiGenerateOptions = {}
): Promise<{ success: boolean; status: number | string; text?: string; error?: string }> {
  const apiKey =
    options.apiKey ||
    process.env.GEMINI_API_KEY ||
    process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    return { success: false, status: 401, error: "GEMINI_API_KEY not configured" };
  }

  const payload: Record<string, unknown> = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      temperature: options.temperature ?? 0.7,
      maxOutputTokens: options.maxOutputTokens ?? 4096,
    },
  };

  if (options.systemInstruction) {
    payload.systemInstruction = {
      parts: [{ text: options.systemInstruction }],
    };
  }

  const postData = JSON.stringify(payload);

  return new Promise((resolve) => {
    const req = https.request(
      {
        hostname: "generativelanguage.googleapis.com",
        path: `/v1beta/models/${model}:generateContent?key=${apiKey}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(postData),
        },
        timeout: 25000,
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          const status = res.statusCode || 500;
          try {
            const parsed = JSON.parse(data);
            if (status >= 200 && status < 300) {
              const candidateText =
                parsed.candidates?.[0]?.content?.parts?.[0]?.text || "";
              resolve({ success: true, status, text: candidateText });
            } else {
              const errorMsg =
                parsed.error?.message || `HTTP ${status} returned from ${model}`;
              resolve({ success: false, status, error: errorMsg });
            }
          } catch {
            resolve({
              success: false,
              status,
              error: `Invalid JSON response from ${model}: ${data.substring(0, 150)}`,
            });
          }
        });
      }
    );

    req.on("error", (err) => {
      resolve({ success: false, status: "NETWORK_ERROR", error: err.message });
    });

    req.on("timeout", () => {
      req.destroy();
      resolve({ success: false, status: 408, error: `Request timed out for model ${model}` });
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Generates content using the complete Gemini model cascade.
 * If any model fails (403, 404, 429, 500, 503, timeout), it logs a warning
 * and automatically shifts to the next lower model in the cascade.
 */
export async function generateWithGeminiFallback(
  prompt: string,
  options: GeminiGenerateOptions = {}
): Promise<GeminiResponse> {
  const attempts: { model: string; status: number | string; error?: string }[] = [];

  for (const model of GEMINI_MODEL_CASCADE) {
    console.log(`[Gemini Engine] Attempting model: ${model}...`);
    const result = await callGeminiModel(model, prompt, options);

    attempts.push({
      model,
      status: result.status,
      error: result.error,
    });

    if (result.success && result.text) {
      console.log(`[Gemini Engine] ✓ Model ${model} succeeded!`);
      return {
        text: result.text,
        modelUsed: model,
        attempts,
      };
    }

    console.warn(
      `[Gemini Engine] ⚠ Model ${model} failed (${result.status}: ${result.error}). Auto-shifting to next lower model in cascade...`
    );
  }

  throw new Error(
    `[Gemini Engine] All models in the cascade failed. Attempts:\n` +
      attempts.map((a) => ` - ${a.model} (${a.status}): ${a.error}`).join("\n")
  );
}
