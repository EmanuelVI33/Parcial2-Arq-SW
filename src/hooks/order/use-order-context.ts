import { OrderContext } from "@/context/OrderContext";
import { useContext } from "react";

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrderContext debe ser utilizado dentro de un proveedor OrderContext');
    }
    return context;
};