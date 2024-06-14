import { toast } from "sonner";
import { useOrderContext } from "./use-order-context"

export const useOrderCreate = () => {
    const { open, handleTogleModal, handleSaveOrder  } = useOrderContext();

    const handleSave = () => {
        handleSaveOrder();
        toast.success("Pedido registrado");
    }

    return {
        open,
        handleTogleModal,
        handleSave,
    }
}