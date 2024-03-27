import { create } from "zustand";

export const useGadgetPageStore = create((set) => ({
  showPayment: false,
  setShowPayment: (value) => set({ showPayment: value }),
}));
