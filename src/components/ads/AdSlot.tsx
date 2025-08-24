import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type Props = {
  slot: string;            // your AdSense ad unit id
  width?: number;          // fixed width for display ads (e.g., 336)
  height?: number;         // fixed height for display ads (e.g., 280)
  responsive?: boolean;    // responsive (mobile) ad
};

export default function AdSlot({ slot, width = 336, height = 280, responsive = false }: Props) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // In dev/localhost AdSense often throws; that's fine.
    }
  }, [slot, width, height, responsive]);

  if (responsive) {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        {...(import.meta.env.MODE !== "production" ? { "data-adtest": "on" } : {})}
      />
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width, height }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
      data-ad-slot={slot}
      {...(import.meta.env.MODE !== "production" ? { "data-adtest": "on" } : {})}
    />
  );
}
