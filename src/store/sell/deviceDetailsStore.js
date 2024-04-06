import { create } from "zustand";

export const useDeviceDetailsStore = create((set) => ({
  phoneConditions: {},
  phoneDetails: {},
  setPhoneDetails: (value) => set({ phoneDetails: value }),
  setPhoneConditions: (value) => set({ phoneConditions: value }),
}));
