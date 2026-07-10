export type NavLink = { id: string; label: string };

// SiteNav + scrollspy both read from this list.
export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "volunteering", label: "Volunteering" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "now", label: "Now" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];
