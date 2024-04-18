import { create } from "zustand";

export const useTransactionsStore = create((set) => ({
  loading: false,
  transactions: [],
  paginatedTransactions: [],
  totalPageNumber: 1,
  pageNumber: 1,
  pageCount: 1,
  setTotalPageNumber: (num) => set({ totalPageNumber: num }),
  setPageNumber: (num) => set({ pageNumber: num }),
  setPaginatedTransactions: (value) => set({ paginatedTransactions: value }),
  setPageCount: (pages) => set({ pageCount: pages }),
  setTransactions: (value) => set({ transactions: value }),
  setLoading: (value) => set({ loading: value }),
}));
