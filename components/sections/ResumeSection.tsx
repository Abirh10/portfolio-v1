import ResumeMascot from "@/components/mascots/ResumeMascot";

const RESUME_PATH = "/Abir-Hirani-Resume.pdf";

function OrnamentFlourish({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 40 16"
      className={`w-10 h-4 ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M0 8 H14 M14 8 Q18 0 22 8 Q26 16 30 8 H40"
        fill="none"
        stroke="var(--theme-accent)"
        strokeWidth={1.4}
      />
      <circle cx={22} cy={8} r={2.2} fill="var(--theme-accent)" />
    </svg>
  );
}

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="page-resume reveal-stagger relative min-h-screen pt-24 pb-44 px-6 flex flex-col items-center justify-center text-center"
    >
      <ResumeMascot />
      <div className="theme-card px-8 py-10 sm:px-12 sm:py-12 max-w-lg w-full flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <OrnamentFlourish />
          <OrnamentFlourish flip />
        </div>
        <h2 className="theme-heading text-3xl sm:text-4xl mb-6">
          Game Manual
        </h2>
        <p className="max-w-md text-lg sm:text-xl theme-text-dim font-library mb-10">
          The full strategy guide — download or view my resume for the complete rundown.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={RESUME_PATH}
            download="Abir-Hirani-Resume.pdf"
            className="theme-btn px-6 py-3 text-xs font-library italic text-base"
          >
            Download
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn px-6 py-3 text-xs font-library italic text-base"
          >
            View
          </a>
        </div>
      </div>
    </section>
  );
}
