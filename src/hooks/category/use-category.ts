import { useCategoryQuery, useCreateCategoryMutation } from "@/hooks/category/category-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const useCategory = () => {
    const { mutate: createCategory } = useCreateCategoryMutation();
    const { data: categories, isLoading, isError, error } = useCategoryQuery();

    useEffect(() => {
        if (isError) {
            toast.error(error?.message ?? 'Error en el servidor'); // Mostrar error de la respuesta
        }
    }, [isError, error]);

    return {
        createCategory,
        categories, 
        isLoading, 
        isError, 
        error,
    }
}