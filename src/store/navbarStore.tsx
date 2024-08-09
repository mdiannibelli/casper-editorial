import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    navbarState: boolean
    openNavbarMenu: () => void;
    closeNavbarMenu: () => void;
}

export const navbarStore = create<State>()(persist((set) => ({
    navbarState: false,
    openNavbarMenu: () => {
        set({ navbarState: true });
    },
    closeNavbarMenu: () => {
        set({ navbarState: false });
    }
}), {
    name: 'SIDE_MENU'
}));