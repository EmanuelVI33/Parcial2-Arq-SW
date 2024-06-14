import { useProductContext } from "./use-product-context";

export const useCreateOrEditProduct = () => {
    const { product, open, handleOpenModal } = useProductContext();

    return {
        product, open, handleOpenModal
    }
}