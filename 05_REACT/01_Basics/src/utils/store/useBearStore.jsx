import { create } from "zustand";

export const useBearStore = create((set) => ({
    bears: 4,
    increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));
