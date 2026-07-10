// Edit freely — the soldier "says" one of these automatically as each
// section scrolls into view. Keys must match each <section id="...">.
export const sectionMessages: Record<string, string> = {
  hero: "MISSION START. SCROLL TO BEGIN.",
  about: "GETTING TO KNOW YOUR COMMANDER...",
  experience: "MISSION LOG: FIELD EXPERIENCE.",
  volunteering: "SIDE QUESTS COMPLETED.",
  projects: "STAGE SELECT: CHOOSE A MISSION.",
  skills: "LOADOUT EQUIPPED AND READY.",
  contact: "MISSION COMPLETE. LET'S CONNECT.",
  resume: "GRAB THE FULL GAME MANUAL BELOW.",
};

export const sectionIds = Object.keys(sectionMessages);
