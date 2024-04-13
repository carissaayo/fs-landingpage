import { create } from "zustand";

export const useBankStore = create((set) => ({
  banks: [],
  loading: false,
  setLoading: (value) => set({ loading: value }),
  selectedBank: "",
  accountNumber: "",
  verifiedAccountName: "",
  accountVerified: false,
  userBankAccounts: [],
  refreshUserBanks: false,
  selectedBankId: "",
  setRefreshUserBanks: (value) => set({ refreshUserBanks: value }),
  setVerifiedAccountName: (value) => set({ verifiedAccountName: value }),
  setSelectedBankId: (value) => set({ selectedBankId: value }),
  setUserBankAccounts: (value) => set({ userBankAccounts: value }),
  setAccountVerified: (value) => set({ accountVerified: value }),
  verifyNumberLoading: false,
  addingAccountNumberLoading: false,
  setAddingAccountNumberLoading: (value) =>
    set({ addingAccountNumberLoading: value }),
  setVerifyNumberLoading: (value) => set({ verifyNumberLoading: value }),
  setAccountNumber: (value) => set({ accountNumber: value }),
  setSelectedBank: (value) => set({ selectedBank: value }),
  setBanks: (value) => set({ banks: value }),
}));
