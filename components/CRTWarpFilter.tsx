/**
 * Defines the SVG filter used to bow page content like an old CRT tube.
 * Renders nothing visible itself — `filter: url(#crt-warp)` in globals.css
 * references the <filter> defined here.
 *
 * How the displacement map works: feDisplacementMap reads two channels
 * from a "map" image and uses them as per-pixel (dx, dy) offsets. The map
 * below layers two single-channel gradients (pure red, pure green — the
 * other channels are 0 so `mix-blend-mode: screen` composites them without
 * bleeding into each other):
 *  - Red channel: neutral (128) at top/bottom, brightest (255) at
 *    vertical-center — drives horizontal displacement that grows toward
 *    the middle rows.
 *  - Green channel: neutral at the sides, brightest at horizontal-center —
 *    drives vertical displacement that grows toward the middle columns.
 * This is a hand-built approximation of lens curvature (not a true radial
 * formula, which would need per-pixel x*y coupling), so the bow reads a
 * little asymmetric rather than a perfect barrel — closer to a gentle CRT
 * ripple than optically exact.
 */
export default function CRTWarpFilter() {
  const mapDataUri =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='y' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%23800000'/%3E%3Cstop offset='50%25' stop-color='%23ff0000'/%3E%3Cstop offset='100%25' stop-color='%23800000'/%3E%3C/linearGradient%3E%3ClinearGradient id='x' x1='0' y1='0' x2='1' y2='0'%3E%3Cstop offset='0%25' stop-color='%23008000'/%3E%3Cstop offset='50%25' stop-color='%2300ff00'/%3E%3Cstop offset='100%25' stop-color='%23008000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23y)'/%3E%3Crect width='100' height='100' fill='url(%23x)' style='mix-blend-mode:screen'/%3E%3C/svg%3E";

  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <filter id="crt-warp" x="-4%" y="-4%" width="108%" height="108%" colorInterpolationFilters="sRGB">
        <feImage href={mapDataUri} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
        <feDisplacementMap in="SourceGraphic" in2="map" scale="26" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
