import { create } from "zustand";

export const useUpdateSaleStore = create((set) => ({
  loading: false,
  success: false,
  showDetails: false,
  showDetailsB: false,
  showUserDetails: false,
  openModal: false,
  phoneDetails: {},
  currentTransaction: {},
  showDetailsC: false,

  setShowUserDetails: (value) => set({ showUserDetails: value }),
  setShowDetails: (value) => set({ showDetails: value }),
  setOpenModal: (value) => set({ openModal: value }),
  setShowDetailsB: (value) => set({ showDetailsB: value }),
  setShowDetailC: (value) => set({ showDetails: value }),
  setCurrentTransaction: (value) => set({ currentTransaction: value }),
  setLoading: (value) => set({ loading: value }),
  setSuccess: (value) => set({ success: value }),
  setPhoneDetails: (value) => set({ phoneDetails: value }),
}));
