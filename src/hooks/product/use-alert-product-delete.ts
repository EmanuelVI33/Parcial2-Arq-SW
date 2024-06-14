import { useEffect } from "react";
import { useProductContext } from "./use-product-context";
import { useDeleteProductMutation } from "./use-product-react-query";
import { toast } from "sonner";

export const useAlertProductDelete = () => {
    const { mutate: deleteProduct, isError, error, isSuccess } = useDeleteProductMutation();
    const { handleSaveModalDelete, handleTogleModalDelete, openDelete, product } = useProductContext();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Producto eliminado exitosamente");
        }
    }, [isSuccess]);
    
    useEffect(() => {
    if (isError) {
        console.log(error);
        const messages = error?.response?.data?.message;
        
        Array.isArray(messages)
        ? (messages.forEach((errorMessage: string)=> {
            toast.error(errorMessage);
        }))
        : toast.error(error?.message ?? 'Error en el servidor'); // Mostrar error de la respuesta
    }
    }, [isError, error]);

    return { 
        product,
        openDelete,
        handleSaveModalDelete, 
        handleTogleModalDelete, 
        deleteProduct 
    };
}