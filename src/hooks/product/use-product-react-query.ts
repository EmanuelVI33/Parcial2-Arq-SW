import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, deleteProduct, getProducts, updateProduct } from "@/api/product-api";

const useCreateProductMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["product"] });
        },
    });
}

const useUpdateProductMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["product"] });
        },
    });
}

const useDeleteProductMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["product"] });
        },
    });
}

const useProductQuery = () => {
    return useQuery({
        queryKey: ["product"],
        queryFn: getProducts,
    });
};


export {
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useProductQuery
}