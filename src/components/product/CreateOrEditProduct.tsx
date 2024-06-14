import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormCreateOrEdit from "./FormCreateOrEdit";
import { useCreateOrEditProduct } from "@/hooks/product/use-create-or-edit-product";


export function CreateOrEditProduct() {
  const { open, product, handleOpenModal } = useCreateOrEditProduct();

  return (
    <Dialog open={open} onOpenChange={handleOpenModal}>
      <DialogTrigger asChild>
        <Button>Crear producto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{product ? 'Editar producto' : 'Creando producto'}</DialogTitle>
        </DialogHeader>
        <FormCreateOrEdit/>
      </DialogContent>
    </Dialog>
  )
}


