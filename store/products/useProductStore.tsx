import { createWithEqualityFn } from 'zustand/traditional'
import { InitialStateProps, IProduct } from './interfaces';
import AxiosConfig from '@/utils/api/AxiosConfig';

const initialState = {
    products: [],
    loading: false,
    error: null,
    success: false
}

const useAuthStore = createWithEqualityFn<InitialStateProps>()((set) => {

    return {
        ...initialState,

        resetStore: () => {
            set((state) => ({ ...state, loading: false, success: false, error: null }));
        },

        fetchProducts: async () => {
            set((state) => ({ ...state, loading: true }));

            AxiosConfig.get('/products')
                .then(async (response) => {
                    const productsData: IProduct[] = response.data;

                    set((state) => ({
                        ...state,
                        error: null,
                        success: true,
                        products: productsData
                    }));
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

        fetchProductById: async (id) => {
            set((state) => ({ ...state, loading: true }));

            return await AxiosConfig.get(`/products/${id}`)
                .then(async (response) => {
                    return response.data as IProduct;
                })
                .catch((errorResponse) => {
                    set((state) => ({
                        ...state,
                        success: false,
                        error: errorResponse?.response?.data?.message || errorResponse.message
                    }));
                    return undefined;
                })
                .finally(() => {
                    set((state) => ({ ...state, loading: false }));
                });
        },
    }
});

export default useAuthStore;
