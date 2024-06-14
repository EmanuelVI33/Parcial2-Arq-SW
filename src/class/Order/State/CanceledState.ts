import {  OrderDetail } from "@/interfaces/order";
import { OrderState } from "./OrderState";
import { OrderStageContext } from "./OrderStageContext";

export class CancelledState implements OrderState {
    constructor(private context: OrderStageContext) {}

    completeOrder(): void {
        console.log("Cannot complete cancelled order.");
    }

    cancelOrder(): void {
        console.log("Order is already cancelled.");
    }

    notify(): void {
        console.log("Order notification sent.");
    }

    modifyOrderDetails(newDetails: OrderDetail[]): void {
        console.log("Cannot modify order details after cancellation.");
    }

    generateInvoice(): void {
        console.log("Invoice not generated for cancelled order.");
    }
}
