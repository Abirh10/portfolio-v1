export type NavLink = { id: string; label: string };

// Desktop icons + Start menu + taskbar all read from this list.
export const navLinks: NavLink[] = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "volunteering", label: "VOLUNTEERING" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "dashboard", label: "DASHBOARD" },
  { id: "contact", label: "CONTACT" },
  { id: "resume", label: "RESUME" },
];
