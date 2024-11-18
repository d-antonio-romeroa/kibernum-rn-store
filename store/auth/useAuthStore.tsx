// store/auth/useAuthStore.ts

import { createWithEqualityFn } from 'zustand/traditional'
import { InitialStateProps } from './interfaces';
import * as SecureStore from 'expo-secure-store';
import AxiosConfig from '@/utils/api/AxiosConfig';
import { router } from 'expo-router';

const initialState = {
    user: null,
    loading: false,
    error: null,
    success: false,
    accessToken: null
}

const useAuthStore = createWithEqualityFn<InitialStateProps>()((set) => {
    const getAccessToken = async () => {
        const credentials = await SecureStore.getItemAsync('accessToken');

        if (credentials) {
            return credentials;
        } else {
            return null;
        }
    }

    const getUser = async () => {
        const user = await SecureStore.getItemAsync('user');


        if (user) {
            return user;
        } else {
            return null;
        }
    }

    getAccessToken().then((initialAccessToken) => {
        set((state) => ({ ...state, accessToken: initialAccessToken }));
    });

    getUser().then((userData) => {
        set((state) => ({ ...state, user: userData }));
    });

    return {
        ...initialState,

        resetStore: () => {
            set((state) => ({ ...state, loading: false, success: false, error: null }));
        },

        login: async ({ username, password }) => {
            console.log('EXECUTIN LOGIN');
            set((state) => ({ ...state, loading: true }));

            AxiosConfig.post('/auth/login', {
                username, password
            })
                .then(async (loginResponse) => {
                    console.log({loginResponse});
                    const userData = loginResponse.data;

                    await SecureStore.setItemAsync('user', username);
                    await SecureStore.setItemAsync('accessToken', userData.token);

                    set((state) => ({
                        ...state,
                        error: null,
                        success: true,
                        user: username,
                        accessToken: userData.token
                    }));
                    router.replace('/');
                })
                .catch((errorResponse) => {
                    console.log({errorResponse});
                    set((state) => ({
                        ...state,
                        success: false,
                        error: errorResponse?.response?.data?.message || errorResponse.message
                    }));
                })
                .finally(() => {
                    set((state) => ({ ...state, loading: false }));
                });
        },

        logout: async () => {
            await SecureStore.deleteItemAsync('user');
            await SecureStore.deleteItemAsync('accessToken');

            set(initialState);
        }
    }
});

export default useAuthStore;
