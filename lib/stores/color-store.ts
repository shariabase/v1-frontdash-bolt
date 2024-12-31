import { create } from "zustand"
import { persist } from "zustand/middleware"

type ColorTheme = "magenta" | "green" | "yellow"

interface ColorStore {
  color: ColorTheme
  setColor: (color: ColorTheme) => void
}

export const useColorStore = create<ColorStore>()(
  persist(
    (set) => ({
      color: "magenta",
      setColor: (color) => set({ color }),
    }),
    {
      name: "color-storage",
    }
  )
)