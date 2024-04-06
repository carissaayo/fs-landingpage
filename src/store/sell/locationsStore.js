import { create } from "zustand";

export const useLocationStore = create((set) => ({
  loading: false,
  states: [],
  cities: [],
  phoneConditions: {},
  selectedStateId: "",
  selectedCitiesList: [],
  selectedState: [],
  setSelectedState: (value) => set({ selectedState: value }),
  setSelectedCitiesList: (value) => set({ selectedCitiesList: value }),

  setSelectedStateId: (value) => set({ selectedStateId: value }),
  setLoading: (value) => set({ loading: value }),
  setShowSteps: (value) => set({ showSteps: value }),
  setPhoneConditions: (value) => set({ phoneConditions: value }),
  setCities: (cities) => set({ cities }),
  setStates: (states) => set({ states }),
}));
