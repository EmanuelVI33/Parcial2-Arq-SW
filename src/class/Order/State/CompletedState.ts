import { OrderDetail } from "@/interfaces/order";
import { OrderState } from "./OrderState";
import { OrderStageContext } from "./OrderStageContext";

export class CompletedState implements OrderState {
    constructor(private context: OrderStageContext) {}

    completeOrder(): void {
        console.log("Order is already completed.");
    }

    cancelOrder(): void {
        console.log("Cannot cancel order after completion.");
    }

    notify(): void {
        console.log("Order notification sent.");
    }

    modifyOrderDetails(newDetails: OrderDetail[]): void {
        console.log("Cannot modify order details after completion.");
    }

    generateInvoice(): void {
        console.log("Invoice generated for completed order.");
    }
}
