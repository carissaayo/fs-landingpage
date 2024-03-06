import { create } from "zustand";

export const useGeneralStore = create((set) => ({
  buyOrSell: "sell",
  setBuyOrSell: (value) => set({ buyOrSell: value }),
}));
