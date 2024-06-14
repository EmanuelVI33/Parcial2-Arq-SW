import { Order, OrderDetail } from "@/interfaces/order";
import { OrderState } from "./OrderState";
import { v4 as uuidv4 } from 'uuid';
import { PendingState } from "./PendingState";

export class OrderImpl implements Order {
    id: string;
    total: number;
    orderDetail: OrderDetail[];
    state: OrderState;

    constructor(orderDetail: OrderDetail[], total: number) {
        this.id = uuidv4();
        this.total = total;
        this.orderDetail = [...orderDetail];
        this.state = new PendingState(); // Estado inicial
    }

    setState(state: OrderState): void {
        this.state = state;
    }

    completeOrder(): void {
        this.state.completeOrder(this);
    }

    cancelOrder(): void {
        this.state.cancelOrder(this);
    }

    notify(): void {
        this.state.notify(this);
    }

    modifyOrderDetails(newDetails: OrderDetail[]): void {
        this.state.modifyOrderDetails(this, newDetails);
    }

    generateInvoice(): void {
        this.state.generateInvoice(this);
    }

    private calculateTotal(orderDetail: OrderDetail[]): number {
        return orderDetail.reduce((acc, detail) => acc + detail.subTotal, 0);
    }
}
