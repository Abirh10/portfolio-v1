import SceneBackground from "@/components/SceneBackground";
import ViewSwitcher from "@/components/ViewSwitcher";
import { SceneTransitionProvider } from "@/lib/scene-transition/SceneTransitionContext";

export default function Home() {
  return (
    <SceneTransitionProvider>
      <SceneBackground />
      <ViewSwitcher />
    </SceneTransitionProvider>
  );
}
