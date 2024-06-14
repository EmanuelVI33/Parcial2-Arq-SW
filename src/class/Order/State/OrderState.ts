import {  OrderDetail } from "@/interfaces/order";

export interface OrderState {
    completeOrder(): void;
    cancelOrder(): void;
    notify(): void;
    modifyOrderDetails(newDetails: OrderDetail[]): void;
    generateInvoice(): void;
}
