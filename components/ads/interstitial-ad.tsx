"use client";
import { useEffect } from "react";

const InterstitialAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.text = `window.googletag = window.googletag || { cmd: [] };
      let interstitialSlot;

      googletag.cmd.push(() => {
        // Define a web interstitial ad slot.
        interstitialSlot = googletag.defineOutOfPageSlot(
          "adData",
          googletag.enums.OutOfPageFormat.INTERSTITIAL
        );

        // Slot returns null if the page or device does not support interstitials.
        if (interstitialSlot) {
          // Enable optional interstitial triggers and register the slot.
          interstitialSlot.addService(googletag.pubads()).setConfig({
            interstitial: {
              triggers: {
                unhideWindow: true,
                navBar: true,
              },
            },
          });

          googletag.pubads().addEventListener("slotOnload", (event) => {
            if (interstitialSlot === event.slot) {
             console.log("Ads Loaded");
          }});
        }

        // Enable SRA and services.
        // googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display(interstitialSlot);
      });`;

    script.setAttribute("type", "module");

    document.head.appendChild(script);
  }, []);

  return <></>;
};

export default InterstitialAd;
