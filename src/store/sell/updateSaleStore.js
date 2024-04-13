import { create } from "zustand";

export const useUpdateSaleStore = create((set) => ({
  loading: false,
  success: false,
  showDetails: false,
  setShowDetails: (value) => set({ showDetails: value }),
  currentTransaction: {},
  setCurrentTransaction: (value) => set({ currentTransaction: value }),
  setLoading: (value) => set({ loading: value }),
  setSuccess: (value) => set({ success: value }),
  setPhoneDetails: (value) => set({ phoneDetails: value }),
  setPhoneConditions: (value) => set({ phoneConditions: value }),
}));
