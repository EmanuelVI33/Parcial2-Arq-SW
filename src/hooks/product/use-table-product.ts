import { useEffect } from "react";
import { useProductContext } from "./use-product-context";
import { useProductQuery } from "./use-product-react-query";
import { toast } from "sonner";

export const useTableProduct = () => {
    const { handleSetProduct, handleOpenModalDelete } = useProductContext();
    const { data: products = [], isLoading, isError, error } = useProductQuery();
    
    useEffect(() => {
        if (isError) {
            toast.error(error?.message ?? 'Error en el servidor'); // Mostrar error de la respuesta
        }
    }, [isError, error]);

    return {
        handleSetProduct, 
        handleOpenModalDelete,
        products,
        isLoading,
        isError, 
        error,
    }
}