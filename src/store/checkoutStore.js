import { create } from "zustand";

export const useCheckoutStore = create((set) => ({
  showSteps: false,
  setShowSteps: (value) => set({ showSteps: value }),
}));
