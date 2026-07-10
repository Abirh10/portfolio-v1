import RetroWindow from "@/components/RetroWindow";

const RESUME_PATH = "/Abir-Hirani-Resume.pdf";

export default function ResumeSection() {
  return (
    <RetroWindow id="resume" title="C:\PORTFOLIO\RESUME.DOC" objCount={2}>
      <p className="text-base sm:text-lg mb-8">
        Download or view the full resume for the complete rundown.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={RESUME_PATH}
          download="Abir-Hirani-Resume.pdf"
          className="bevel-out px-5 py-2 text-center font-pixel-title text-xs text-win-text"
        >
          DOWNLOAD
        </a>
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="bevel-out px-5 py-2 text-center font-pixel-title text-xs text-win-text"
        >
          VIEW
        </a>
      </div>
    </RetroWindow>
  );
}
