import { Order, OrderDetail } from "@/interfaces/order";
import { OrderState } from "./OrderState";
import { v4 as uuidv4 } from 'uuid';
import { PendingState } from "./PendingState";

export class OrderStageContext implements Order {
    id: string;
    total: number;
    orderDetail: OrderDetail[];
    state: OrderState;

    constructor(orderDetail: OrderDetail[], total: number) {
        this.id = uuidv4();
        this.total = total;
        this.orderDetail = [...orderDetail];
        this.state = new PendingState(this); // Estado inicial
    }

    getStatus(): string {
        return this.state.getStatus();
    }

    setState(state: OrderState): void {
        this.state = state;
    }

    completeOrder(): void {
        this.state.completeOrder();
    }

    cancelOrder(): void {
        this.state.cancelOrder();
    }

    notify(): string {
        return this.state.notify();
    }

    modifyOrderDetails(newDetails: OrderDetail[]): void {
        this.state.modifyOrderDetails(newDetails);
    }

    generateInvoice(): void {
        this.state.generateInvoice();
    }

    changeState(newState: string): void {
        this.state.changeState(newState);
    }
}
