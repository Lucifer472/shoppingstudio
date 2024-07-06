import { create } from "zustand";

interface useNavStoreProps {
  isShow: boolean;
  toggle: (b: boolean) => void;
}

export const useNavStore = create<useNavStoreProps>((set) => ({
  isShow: true,
  toggle: (b) => set({ isShow: b }),
}));

interface useAdStateProp {
  adCode: {
    label: string;
    id: string;
    size: googletag.GeneralSize;
  }[];
  setAdCode: (
    code: {
      label: string;
      id: string;
      size: googletag.GeneralSize;
    }[]
  ) => void;
}

export const useAdState = create<useAdStateProp>((set) => ({
  adCode: [
    {
      label: "/23060189646/N5",
      id: "div-gpt-ad-1720162921566-0",
      size: [336, 280],
    },
  ],
  setAdCode: (code) => set({ adCode: code }),
}));
