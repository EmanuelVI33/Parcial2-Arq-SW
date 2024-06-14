import {  OrderDetail } from "@/interfaces/order";
import { OrderStageContext } from "./OrderStageContext";

export abstract class OrderState {
    protected order: OrderStageContext;

    constructor(order: OrderStageContext) {
        this.order = order;
    }

    completeOrder(): void {
        throw new Error("Cannot complete order in the current state.");
    }

    cancelOrder(): void {
        throw new Error("Cannot cancel order in the current state.");
    }

    notify(): void {
        throw new Error("Cannot notify in the current state.");
    }

    modifyOrderDetails(newDetails: OrderDetail[]): void {
        throw new Error("Cannot modify order details in the current state.");
    }

    generateInvoice(): void {
        throw new Error("Cannot generate invoice in the current state.");
    }
}
