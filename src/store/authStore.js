import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLogin: false,
  isVerified: false,
  verificationDone: false,
  loading: false,
  success: false,
  openAlert: false,
  setOpenAlert: (value) => set(() => ({ openAlert: value })),
  setSuccess: (sucess) => set(() => ({ success: sucess })),
  setLoading: (loading) => set(() => ({ loading: loading })),
  setIsLogin: (value) => set({ isLogin: value }),
  setIsVerified: (value) => set({ isVerified: value }),
  setVerificationDone: (value) => set({ verificationDone: value }),
}));
