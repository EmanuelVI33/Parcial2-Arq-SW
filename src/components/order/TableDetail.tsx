import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button";
import { useOrderContext } from '../../hooks/order/use-order-context';

function TableOrderDetail() {
    const { orderDetail, handleDelete } = useOrderContext();

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Producto</TableHead>
                    <TableHead>Precio unidad</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Importe</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orderDetail && orderDetail.map((item, index) => {
                    const { product, unitPrice, amount, subTotal } = item;

                    return (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{unitPrice}</TableCell>
                            <TableCell>{amount}</TableCell>
                            <TableCell>{subTotal}</TableCell>
                            <TableCell className="text-center flex justify-around">
                                <Button onClick={() => handleDelete(index)}>
                                    <span className="mr-2">Eliminar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                                </Button>
                            </TableCell>
                        </TableRow>
                    );
                }
                )}
            </TableBody>
        </Table>
    )
}

export default TableOrderDetail
