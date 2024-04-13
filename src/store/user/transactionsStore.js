import { create } from "zustand";

export const useTransactionsStore = create((set) => ({
  loading: false,
  transactions: [],
  setTransactions: (value) => set({ transactions: value }),
  setLoading: (value) => set({ loading: value }),
}));
