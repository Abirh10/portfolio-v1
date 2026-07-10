export type AboutStat = { label: string; value: string };

// Edit freely — shown as a NES-style character bio card.
export const about = {
  bio: "Software engineer who likes turning ideas into working systems — from machine learning pipelines to small tools people actually use. Currently building and shipping projects across web dev and applied ML.",
  stats: [
    { label: "CLASS", value: "SOFTWARE ENGINEER" },
    { label: "FOCUS", value: "WEB DEV / MACHINE LEARNING" },
    { label: "STATUS", value: "OPEN TO OPPORTUNITIES" },
  ] as AboutStat[],
};
