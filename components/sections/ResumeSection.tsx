import SectionCard from "@/components/v3/SectionCard";

const RESUME_PATH = "/Abir-Hirani-Resume.pdf";

export default function ResumeSection() {
  return (
    <SectionCard
      id="resume"
      label="08 · Resume"
      title="The full rundown"
      art={{ colorA: "#e4dcc8", colorB: "#fbf8ee", seed: 8 }}
    >
      <p className="text-base sm:text-lg mb-8">
        Download or view the full resume for the complete rundown.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={RESUME_PATH}
          download="Abir-Hirani-Resume.pdf"
          className="card px-5 py-2.5 text-center text-sm"
          style={{ background: "var(--surface-dim)" }}
        >
          Download
        </a>
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="card px-5 py-2.5 text-center text-sm"
          style={{ background: "var(--surface-dim)" }}
        >
          View
        </a>
      </div>
    </SectionCard>
  );
}
