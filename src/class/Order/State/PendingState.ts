import { Order, OrderDetail } from "@/interfaces/order";
import { OrderState } from "./OrderState";

export class PendingState implements OrderState {
    completeOrder(order: Order): void {
        order.setState(new CompletedState());
    }

    cancelOrder(order: Order): void {
        order.setState(new CanceledState());
    }

    notify(order: Order): void {
        console.log("Sending reminder notification...");
    }

    modifyOrderDetails(order: Order, newDetails: OrderDetail[]): void {
        order.orderDetail = newDetails;
    }

    generateInvoice(order: Order): void {
        throw new Error("Cannot generate invoice for a pending order.");
    }
}
