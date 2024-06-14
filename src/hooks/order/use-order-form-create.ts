import { useProductQuery } from "../product/use-product-react-query"
import { useOrderContext } from "./use-order-context";

export const useOrderFormCreate = () => {
    const {
        data: products, 
    } = useProductQuery();
    const {
        handleAddProduct
    } = useOrderContext();

    return {
        products,
        handleAddProduct
    }
}