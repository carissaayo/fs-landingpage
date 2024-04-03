import { create } from "zustand";

const getUserFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("data")) ?? [];

export const useCreateUserStore = create((set) => ({
  loading: false,
  success: false,
  user: getUserFromLocalStorage(),
  setUser: (user) => set(() => ({ user })),
  setSuccess: (sucess) => set(() => ({ success: sucess })),
  setLoading: (loading) => set(() => ({ loading: loading })),
}));
