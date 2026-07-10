export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

// Edit freely.
export const experience: ExperienceEntry[] = [
  {
    role: "Artificial Intelligence Intern",
    org: "Glendor",
    period: "Aug 2026 – Present",
    bullets: [
      "Evaluated performance of open-source LLMs including Llama, Claude, and Mistral across text and image processing tasks",
      "Developed fine-tuning workflows for pre-trained language models using custom datasets optimized for mobile deployment",
      "Implemented model compression and optimization techniques to adapt LLMs for resource-constrained mobile environments",
    ],
  },
];
