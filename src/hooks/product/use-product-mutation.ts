import { ProductMutate } from "@/interfaces/product";
import { useCreateProductMutation, useUpdateProductMutation } from "./use-product-react-query";

export const useProductMutation = () => {
    const { 
        mutate: mutateCreate, 
        isError: isErrorCreate, 
        error: errorCreate, 
        isSuccess: isSuccessCreate, 
        isPending: isPendingCreate 
    } = useCreateProductMutation();
    
    const { 
        mutate: mutateUpdate, 
        isError: isErrorUpdate, 
        error: errorUpdate, 
        isSuccess: isSuccessUpdate, 
        isPending: isPendingUpdate 
    } = useUpdateProductMutation();

    const mutateProduct = (values: ProductMutate) => {
        if (values.id) {
            mutateCreate(values);
        } else {
            mutateUpdate(values);
        }
    };

    const isSuccess = isSuccessCreate || isSuccessUpdate;
    const isPeding = isPendingCreate || isPendingUpdate;
    const isError = isErrorCreate || isErrorUpdate;
    const error = errorCreate || errorUpdate;

    return { mutateProduct, isError, error, isPeding, isSuccess };
};