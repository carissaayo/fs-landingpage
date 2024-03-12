import { create } from "zustand";

export const useGeneralStore = create((set) => ({
  buyOrSell: "sell",
  setBuyOrSell: (value) => set({ buyOrSell: value }),
  showContent: 1,

  setShowContent: (value) => set({ showContent: value }),
  imageList: [],
  setImageList: (value) => set({ imageList: value }),
  previewImage: false,
  setPreviewImage: (value) => set({ previewImage: value }),
  showImage: {},
  setShowImage: (value) => set({ showImage: value }),
  imageName: false,
  setImageName: (value) => set({ imageName: value }),
  urlList: [],
  setUrlList: (value) => set({ urlList: value }),
  gadget: [],
  setGadget: (value) => set({ gadget: value }),
}));
