import TableOrderDetail from "./TableDetail";
import FormCreateOrder from "./FormCreate";
import { CustomDialog } from "../ui/custom-dialog";
import { DialogDescription, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { useOrderContext } from "@/hooks/order/use-order-context";

export function CreateOrder() {
  const { orderDetail, handleAddOrder } = useOrderContext();

  return (
    <CustomDialog title="Realizar Pedido" titleButton="Registrar">
      <>
        <DialogDescription className="mb-12">
          <FormCreateOrder />
          <TableOrderDetail />
        </DialogDescription>
        <DialogFooter>
          <Button onClick={handleAddOrder}  disabled={orderDetail.length < 1}>Registrar</Button>
        </DialogFooter>
      </>
    </CustomDialog>
  )
}


