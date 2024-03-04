// Import the 'create' function from the 'zustand' library.
import { create } from "zustand";

// Define the type 'SearchStore' which represents the state and functions of the search store.
type SearchStore = {
  // The 'isOpen' state variable indicates whether the search bar is open or not.
  isOpen: boolean;

  // The 'onOpen' function sets the 'isOpen' state to 'true' when called.
  onOpen: () => void;

  // The 'onClose' function sets the 'isOpen' state to 'false' when called.
  onClose: () => void;

  // The 'toggle' function toggles the 'isOpen' state, opening the search bar if it's closed and vice versa.
  toggle: () => void;
};

// Create the search store using the 'create' function and the 'SearchStore' type.
export const useSearch = create<SearchStore>((set, get) => ({
  // Initialize the 'isOpen' state to 'false'.
  isOpen: false,

  // Define the 'onOpen' function that sets the 'isOpen' state to 'true'.
  onOpen: () => set({ isOpen: true }),

  // Define the 'onClose' function that sets the 'isOpen' state to 'false'.
  onClose: () => set({ isOpen: false }),

  // Define the 'toggle' function that toggles the 'isOpen' state.
  toggle: () => set({ isOpen: !get().isOpen }),
}));
