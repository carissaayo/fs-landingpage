import { create } from "zustand";

export const useBrandsAndModelsStore = create((set) => ({
  loading: false,
  brands: [],
  models: [],
  phoneConditions: {},
  selectedBrandId: "",
  selectedModelList: [],
  selectedModel: "",
  selectedModelId: "",
  selectedVariant: {},
  setSelectedVariant: (value) => set({ selectedVariant: value }),
  setSelectedModelId: (value) => set({ selectedModelId: value }),
  setSelectedModel: (value) => set({ selectedModel: value }),
  setSelectedModelList: (value) => set({ selectedModelList: value }),
  setSelectedBrandId: (value) => set({ selectedBrandId: value }),
  setLoading: (value) => set({ loading: value }),
  setShowSteps: (value) => set({ showSteps: value }),
  setPhoneConditions: (value) => set({ phoneConditions: value }),
  setModels: (models) => set({ models }),
  setBrands: (brands) => set({ brands }),
}));
