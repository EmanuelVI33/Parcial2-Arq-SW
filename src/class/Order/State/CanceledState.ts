import { Order, OrderDetail } from "@/interfaces/order";
import { OrderState } from "./OrderState";

export class CanceledState implements OrderState {
    completeOrder(order: Order): void {
        throw new Error("Cannot complete a canceled order.");
    }

    cancelOrder(order: Order): void {
        throw new Error("Order is already canceled.");
    }

    notify(order: Order): void {
        console.log("Sending cancellation notification...");
    }

    modifyOrderDetails(order: Order, newDetails: OrderDetail[]): void {
        throw new Error("Cannot modify a canceled order.");
    }

    generateInvoice(order: Order): void {
        throw new Error("Cannot generate invoice for a canceled order.");
    }
}
