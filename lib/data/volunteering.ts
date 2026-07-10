export type VolunteeringEntry = {
  role: string;
  org: string;
  period?: string;
  bullets: string[];
};

// Edit freely.
export const volunteering: VolunteeringEntry[] = [
  {
    role: "Resident Assistant (RA)",
    org: "University of Windsor",
    period: "Aug 2024 – Apr 2025",
    bullets: [
      "Provided leadership and acted as primary point of support for 32 residents while maintaining 24/7 on-call availability for emergencies and crisis situations",
      "Organized 8+ community-building events per semester including educational workshops, social activities, and wellness programs to foster an inclusive residence community",
      "Collaborated with residence staff and campus resources to ensure student wellbeing, consistently meeting administrative deadlines and documentation requirements",
    ],
  },
  {
    role: "Head of Projects",
    org: "AI Club, University of Windsor",
    bullets: [
      "Led planning and execution of multiple community initiatives, coordinated team members, and ensured project milestones were delivered on time",
      "Managed project schedules, delegated tasks, and oversaw quality of deliverables to support organizational goals",
    ],
  },
  {
    // TODO: placeholder — need real dates/org/duties for this role.
    role: "Head of Student Affairs",
    org: "TBD",
    bullets: ["Add details for this role — dates, organization, and 2-3 accomplishments."],
  },
];
