import fs from "fs";
import { generateGoogleSearchFaqs } from "../src/lib/google-faq-engine.ts";

async function test() {
  console.log("=== TESTING GOOGLE SEARCH FAQ ENGINE ===\n");

  const testProfile = {
    slug: "zendaya",
    name: "Zendaya",
    primaryKeyword: "zendaya",
    quickFacts: {
      fullName: "Zendaya Maree Stoermer Coleman",
      birthDate: "September 1, 1996",
      birthPlace: "Oakland, California",
      age: 29,
      height: "5 ft 10 in (178 cm)",
      netWorth: "$25.0 Million USD (Verified)",
      primaryRole: "Actress, Producer",
      knownFor: "Euphoria, Dune, Spider-Man: No Way Home, Challengers",
      activeYears: "2009–Present"
    },
    relationshipProfile: {
      status: "In a Relationship",
      partner: "Tom Holland",
      datingHistorySummary: "Zendaya and Tom Holland met filming Spider-Man: Homecoming (2016) and confirmed their relationship in 2021."
    },
    metrics: [
      { label: "Verified Net Worth", value: "$25.0 Million", benchmark: "", verifiedSource: "" }
    ],
    filmography: [
      { title: "Dune: Part Two", year: 2024, role: "Chani", type: "Movie", rating: 8.6, boxOfficeOrNetwork: "$714M" },
      { title: "Challengers", year: 2024, role: "Tashi Duncan", type: "Movie", rating: 7.8, boxOfficeOrNetwork: "$94M" }
    ],
    careerMilestones: [
      { year: "2020", title: "Historic Emmy Award for Euphoria", description: "Youngest winner of Outstanding Lead Actress in a Drama Series." }
    ],
    executiveSummary: "Zendaya is an Emmy-winning American actress, producer, and style icon with landmark box office records."
  };

  const faqs = await generateGoogleSearchFaqs(testProfile);
  console.log(`Generated ${faqs.length} FAQs for ${testProfile.name}:`);
  faqs.forEach((faq, i) => {
    console.log(`\n[FAQ ${i + 1}] Q: ${faq.question}`);
    console.log(`         A: ${faq.answer}`);
  });
}

test();
