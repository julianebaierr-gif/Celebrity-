export interface QuickFactsData {
  fullName?: string;
  birthDate: string;
  birthPlace?: string;
  age?: number;
  deathDate?: string;
  isDeceased?: boolean;
  height?: string;
  netWorth?: string;
  primaryRole?: string;
  knownFor?: string;
  activeYears?: string;
  education?: string;
}

/**
 * Calculates exact real-time age dynamically from birthDate string (and optional deathDate string).
 * Handles leap years and day-level precision.
 * If deathDate is provided, returns age at the time of passing.
 */
export function calculateCelebrityAge(
  birthDateStr: string,
  deathDateStr?: string,
  fallbackAge?: number
): number {
  if (!birthDateStr) return fallbackAge ?? 0;
  const birthDate = new Date(birthDateStr);
  if (isNaN(birthDate.getTime())) return fallbackAge ?? 0;

  const endDate = deathDateStr ? new Date(deathDateStr) : new Date();
  if (isNaN(endDate.getTime())) return fallbackAge ?? 0;

  let age = endDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = endDate.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && endDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return Math.max(0, age);
}

/**
 * Checks whether a celebrity is deceased based on quickFacts.
 */
export function isCelebrityDeceased(quickFacts: {
  deathDate?: string;
  isDeceased?: boolean;
}): boolean {
  return Boolean(quickFacts.deathDate || quickFacts.isDeceased);
}

/**
 * Formats career span dynamically in real-time.
 * If the celebrity is deceased, guarantees that "-Present" is NEVER shown.
 * Replaces "Present" with the year of death.
 */
export function getFormattedCareerSpan(
  activeYears: string,
  deathDate?: string,
  isDeceased?: boolean
): string {
  if (!activeYears) return "";

  if (deathDate) {
    const deathYear = new Date(deathDate).getFullYear();
    if (!isNaN(deathYear)) {
      return activeYears.replace(/Present/gi, `${deathYear}`);
    }
  }

  if (isDeceased) {
    return activeYears.replace(/[–\-]\s*Present/gi, "");
  }

  return activeYears;
}

/**
 * Returns formatted birth & age details for QuickFactBox.
 */
export function getBirthAndAgeDisplay(quickFacts: QuickFactsData): {
  label: string;
  value: string;
  age: number;
  isDeceased: boolean;
} {
  const deceased = isCelebrityDeceased(quickFacts);
  const calculatedAge = calculateCelebrityAge(
    quickFacts.birthDate,
    quickFacts.deathDate,
    quickFacts.age
  );

  if (deceased) {
    if (quickFacts.deathDate) {
      return {
        label: "Lifespan & Age",
        value: `${quickFacts.birthDate} – ${quickFacts.deathDate} (Died at age ${calculatedAge})`,
        age: calculatedAge,
        isDeceased: true,
      };
    }
    return {
      label: "Lifespan & Age",
      value: `${quickFacts.birthDate} (Deceased, aged ${calculatedAge})`,
      age: calculatedAge,
      isDeceased: true,
    };
  }

  return {
    label: "Birth Date & Age",
    value: `${quickFacts.birthDate} (${calculatedAge} years old)`,
    age: calculatedAge,
    isDeceased: false,
  };
}

/**
 * Returns clean age badge text for summary cards and headers.
 * e.g. "51 Years Old" or "Deceased (Aged 54)"
 */
export function getAgeBadgeText(
  quickFacts: QuickFactsData,
  shortFormat: boolean = false
): string {
  const deceased = isCelebrityDeceased(quickFacts);
  const age = calculateCelebrityAge(quickFacts.birthDate, quickFacts.deathDate, quickFacts.age);

  if (deceased) {
    return shortFormat ? `† ${age} yrs` : `Deceased (Aged ${age})`;
  }
  return shortFormat ? `${age} yrs` : `${age} Years Old`;
}
