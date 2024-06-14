import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useAppContext debe ser utilizado dentro de un proveedor AppContext');
    }
    return context;
};