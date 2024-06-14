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
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const options = [
    'Pendiente', 'Completado', 'Cancelado'];

function TableOrder() {
    const { order, changeOrderState } = useOrderContext();

    const handleChangeState = (orderId: string, newState: string) => {
        changeOrderState(orderId, newState);
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nro</TableHead>
                    <TableHead>Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {order && Object.values(order).map((item, index) => {
                    const { id, total } = item;
                    const status = item.getStatus();

                    return (
                        <TableRow key={id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{total}</TableCell>
                            <TableCell>
                                <Select defaultValue={status} onValueChange={(newValue) => handleChangeState(id, newValue)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Aplicar Descuento" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {options.map((option, index) => (
                                            <SelectItem key={index} value={option}>
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                                </Select>
                            </TableCell>
                            <TableCell className="text-center flex justify-around">
                                <Button>
                                    <span className="mr-2">Eliminar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                                </Button>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    )
}

export default TableOrder
