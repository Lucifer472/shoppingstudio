"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { AdsWrapper } from "@/components/wrappers/ad-wrapper";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Ad3 = () => {
  return <AdsWrapper id="7246732020" layout="in-article" />;
};

export const Ad2 = () => {
  return <AdsWrapper id="3273442398" />;
};

export const Ad1 = () => {
  return <AdsWrapper id="5516462359" />;
};

export const EndOfArticleAd = () => {
  const pathname = usePathname();
  useEffect(() => {
    try {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, [pathname]);

  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-3985697571961561"
          data-ad-slot="2447552632"
        ></ins>
      </div>
    </div>
  );
};

export const CustomAnchorAd = () => {
  const [open, setOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
      try {
        // @ts-ignore
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.log(error);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const height = useMemo(() => divRef.current?.offsetHeight, [divRef]);

  return (
    <div
      ref={divRef}
      className={
        "w-full sm:hidden h-auto min-h-[80px] p-1 fixed left-0 text-center transition-all duration-500 bg-neutral-200 z-10 shadow-xl"
      }
      style={{
        bottom: open ? "0px" : height ? `${height}px` : "-80px",
      }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="absolute top-[-30px] bg-neutral-200 cursor-pointer rounded-t-lg left-2 w-[40px] h-[30px] flex items-center justify-center"
      >
        {open ? <ChevronDown /> : <ChevronUp />}
      </button>
      <div className="w-full h-full">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3985697571961561"
          data-ad-slot="2221452275"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};
