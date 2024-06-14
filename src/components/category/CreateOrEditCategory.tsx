import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormCreateOrEdit from "./FormCreateOrEdit";
import { useState } from "react";


export function CreateOrEditCategory() {
  const [open, setOpen] = useState(false);

  const handleSaveSuccess = () => {
    setOpen(false); 
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Crear categoría</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Creando categoría</DialogTitle>
        </DialogHeader>
        <FormCreateOrEdit handleSaveSuccess={handleSaveSuccess} />
      </DialogContent>
    </Dialog>
  )
}


