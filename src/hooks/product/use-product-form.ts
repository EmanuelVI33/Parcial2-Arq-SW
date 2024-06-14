import { useProductMutation } from "./use-product-mutation";
import { useCategory } from '../category/use-category';
import { useEffect } from "react";
import { toast } from "sonner";
import { useProductContext } from "./use-product-context";

export const useProductForm = () => {
    const { 
        product, 
        handleSetProduct, 
        handleSaveModal, 
        handleCloseModal, 
    } = useProductContext();
    const { 
        mutateProduct, 
        isError, 
        error, 
        isSuccess 
    } = useProductMutation();
    const { categories } = useCategory();

    useEffect(() => {
      if (isSuccess) {
        toast.success("Producto Creado exitosamente");
        handleSaveModal();
      }
    }, [isSuccess, handleSaveModal]);
  
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
      categories,  
      handleSetProduct,
      handleSaveModal,
      handleCloseModal,
      mutateProduct,
    }
}