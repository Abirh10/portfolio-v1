const RESUME_PATH = "/Abir-Hirani-Resume.pdf";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center text-center"
    >
      <h2 className="font-pixel-title text-lg sm:text-2xl text-nes-yellow text-outline mb-6">
        GAME MANUAL
      </h2>
      <p className="max-w-md text-lg sm:text-xl text-nes-white/90 mb-10">
        The full strategy guide — download or view my resume for the complete rundown.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={RESUME_PATH}
          download="Abir-Hirani-Resume.pdf"
          className="pixel-border bg-nes-navy px-6 py-3 font-pixel-title text-xs text-nes-yellow hover:bg-nes-blue transition-colors"
        >
          DOWNLOAD
        </a>
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-border bg-nes-navy px-6 py-3 font-pixel-title text-xs text-nes-yellow hover:bg-nes-blue transition-colors"
        >
          VIEW
        </a>
      </div>
    </section>
  );
}
