import { Platform } from "react-native";
import { create } from "zustand";
import Constants from 'expo-constants';

interface InitialStateProps {
    theme: 'light' | 'dark';
    paddingTop: number;
    toggleTheme: () => void;
}

const useUiStore = create<InitialStateProps>()((set) => ({
    theme: 'light',
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    toggleTheme: () => {
        set((state) => {
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        })
    },
}));

export default useUiStore;
