import SectionCard from "@/components/v3/SectionCard";
import StatCard from "@/components/v3/StatCard";
import HoursCoded from "@/components/widgets/HoursCoded";
import CoffeesDrunk from "@/components/widgets/CoffeesDrunk";
import EarthRotating from "@/components/widgets/EarthRotating";
import SpotifyNowPlaying from "@/components/widgets/SpotifyNowPlaying";
import GithubContributions from "@/components/widgets/GithubContributions";
import WakatimeStats from "@/components/widgets/WakatimeStats";

export default function NowSection() {
  return (
    <SectionCard
      id="now"
      label="06 · Now"
      title="Right now"
      art={{ colorA: "#20264a", colorB: "#8b9dff", seed: 6 }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatCard label="Hours coded">
          <HoursCoded />
        </StatCard>
        <StatCard label="Coffees drunk">
          <CoffeesDrunk />
        </StatCard>
        <StatCard label="Earth" className="col-span-2 sm:col-span-1">
          <EarthRotating />
        </StatCard>
        <StatCard label="Song of choice" className="col-span-2 sm:col-span-1">
          <SpotifyNowPlaying />
        </StatCard>
        <StatCard label="GitHub activity" className="col-span-2 sm:col-span-1">
          <GithubContributions />
        </StatCard>
        <StatCard label="Coding time" className="col-span-2 sm:col-span-1">
          <WakatimeStats />
        </StatCard>
      </div>
    </SectionCard>
  );
}
