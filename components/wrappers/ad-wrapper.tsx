"use client";
import { AdUnit } from "next-google-adsense";

export const AdsWrapper = ({
  id,
  layout = "display",
}: {
  id: string;
  layout?: "custom" | "display" | "in-article";
}) => {
  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <AdUnit
          publisherId="pub-3985697571961561"
          slotId={id}
          layout={layout}
        />
      </div>
    </div>
  );
};
