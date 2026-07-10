import RetroWindow from "@/components/RetroWindow";
import GithubContributions from "@/components/widgets/GithubContributions";
import SpotifyNowPlaying from "@/components/widgets/SpotifyNowPlaying";
import WakatimeStats from "@/components/widgets/WakatimeStats";

const WIDGETS = [
  { title: "GITHUB.DLL", body: <GithubContributions /> },
  { title: "SPOTIFY.DLL", body: <SpotifyNowPlaying /> },
  { title: "WAKATIME.DLL", body: <WakatimeStats /> },
];

export default function DashboardSection() {
  return (
    <RetroWindow id="dashboard" title="C:\PORTFOLIO\DASHBOARD" objCount={WIDGETS.length}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {WIDGETS.map((widget) => (
          <div key={widget.title} className="bevel-out">
            <div
              className="px-2 py-1 font-pixel-title text-[10px]"
              style={{
                background: `linear-gradient(to right, var(--win-titlebar-start), var(--win-titlebar-end))`,
                color: "var(--win-titlebar-text)",
              }}
            >
              {widget.title}
            </div>
            <div className="p-3 min-h-[6rem]">{widget.body}</div>
          </div>
        ))}
      </div>
    </RetroWindow>
  );
}
