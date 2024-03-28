import { create } from "zustand";

export const useGadgetPageStore = create((set) => ({
  showInitialDeposit: false,
  setShowInitialDeposit: (value) => set({ showInitialDeposit: value }),
  showPayment: false,
  setShowPayment: (value) => set({ showPayment: value }),
  initialDeposit: "₦",
  setInitialDeposit: (value) => set({ initialDeposit: value }),
  paymentPlan: "",
  setPaymentPlan: (value) => set({ paymentPlan: value }),
  deliveryState: "",
  setDeliveryState: (value) => set({ deliveryState: value }),
}));
