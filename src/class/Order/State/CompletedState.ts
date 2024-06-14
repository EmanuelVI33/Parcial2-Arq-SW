import { Order, OrderDetail } from "@/interfaces/order";
import { OrderState } from "./OrderState";

export class CompletedState implements OrderState {
    completeOrder(order: Order): void {
        throw new Error("Order is already completed.");
    }

    cancelOrder(order: Order): void {
        throw new Error("Cannot cancel a completed order.");
    }

    notify(order: Order): void {
        console.log("Sending thank you notification...");
    }

    modifyOrderDetails(order: Order, newDetails: OrderDetail[]): void {
        throw new Error("Cannot modify a completed order.");
    }

    generateInvoice(order: Order): void {
        console.log("Generating invoice...");
    }
}
