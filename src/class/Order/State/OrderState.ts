import { Order, OrderDetail } from "@/interfaces/order";

export interface OrderState {
    completeOrder(order: Order): void;
    cancelOrder(order: Order): void;
    notify(order: Order): void;
    modifyOrderDetails(order: Order, newDetails: OrderDetail[]): void;
    generateInvoice(order: Order): void;
}
