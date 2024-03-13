// Import the 'create' function from the 'zustand' library.
import { create } from "zustand";

type SettingsStore = {
  // Flag to track if the settings panel is open or not
  isOpen: boolean;

  // Function to open the settings panel
  onOpen: () => void;

  // Function to close the settings panel
  onClose: () => void;
};

// Create a new store for managing settings using Zustand
export const useSettings = create<SettingsStore>((set) => ({
  // Initialize the settings panel as closed
  isOpen: false,

  // Function to open the settings panel
  onOpen: () => set({ isOpen: true }),

  // Function to close the settings panel
  onClose: () => set({ isOpen: false }),
}));
