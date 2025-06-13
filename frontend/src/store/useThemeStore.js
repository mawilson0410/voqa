import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("voqa-theme") || "dracula",
  setTheme: (theme) => {
    localStorage.setItem("voqa-theme", theme);
    set({ theme });
  },
}));