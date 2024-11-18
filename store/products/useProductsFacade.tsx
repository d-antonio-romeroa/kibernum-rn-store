import { shallow } from "zustand/shallow"
import useProductStore from "./useProductStore"

export const useProductFacade = () => {
    const {
        products,
        loading,
        error,
        success,
        fetchProductById,
        fetchProducts,
        resetStore
    } = useProductStore(
        (state) => ({
            loading: state.loading,
            error: state.error,
            success: state.success,
            products: state.products,
            fetchProducts: state.fetchProducts,
            fetchProductById: state.fetchProductById,
            resetStore: state.resetStore
        }),
        shallow
    )

    return {
        products,
        loading,
        error,
        success,
        fetchProducts,
        fetchProductById,
        resetStore,
    }
}
