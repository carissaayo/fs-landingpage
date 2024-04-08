import { create } from "zustand";

export const useDeviceDetailsStore = create((set) => ({
  phoneConditions: {},
  phoneDetails: {
    phoneConditions: {
      phoneStarting: false,
      makeAndReceiveCalls: false,
      faultyVolumeButtons: false,
      faultyFingerPrint: false,
      missingSimCardTray: false,
      faultySpeakers: false,
      faultyEarpiece: false,
      faultyPowerButton: false,
      faultyChargingPort: false,
      faultyFrontCamera: false,
      faultyBackCamera: false,
      scratchedScreen: false,
      spottedScreen: false,
      brokenScreen: false,
      brokenCameraGlass: false,
      damagedBackCoverGlass: false,
      brokenPhoneBody: false,
      scratchedPhoneBody: false,
      originalCharger: false,
      originalChargerCable: false,
      receipt: false,
      originalBox: false,
      brandWarranty: false,
    },
  },
  option: false,
  setOption: (value) => set({ option: value }),

  setPhoneDetails: (value) => set({ phoneDetails: value }),
  setPhoneConditions: (value) => set({ phoneConditions: value }),
}));
