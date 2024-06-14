import { 
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
} from "@/components/ui/alert-dialog"
import { useAlertProductDelete } from "@/hooks/product/use-alert-product-delete"

function DeleteProduct() {
    const { openDelete, product, handleTogleModalDelete, deleteProduct, handleSaveModalDelete } = useAlertProductDelete();

    const handleDelete = () => {
        if (product && product.id) {
            deleteProduct(product.id);
            handleSaveModalDelete();
        }
    }

    return (
        <AlertDialog open={openDelete} >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{`Esta seguro de eliminar el producto ${product?.name}?`}</AlertDialogTitle>
                    <AlertDialogDescription>
                    {`El producto ${product?.name} con el código ${product?.id} se eliminará permanentemente`}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => handleTogleModalDelete()}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete()}>Eliminar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteProduct
