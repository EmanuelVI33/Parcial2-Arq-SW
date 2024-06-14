import { Product } from "./product";
import { OrderState } from "@/class/Order/State/OrderState";

export interface Order {
    id: string;
    total: number;
    orderDetail: OrderDetail[];
    state: OrderState; // Referencia al estado actual
    setState(state: OrderState): void;
    completeOrder(): void;
    cancelOrder(): void;
    notify(): void;
    modifyOrderDetails(newDetails: OrderDetail[]): void;
    generateInvoice(): void;
}

export interface OrderDetail {
    product: Product;
    amount: number;
    unitPrice: number;
    subTotal: number;
}