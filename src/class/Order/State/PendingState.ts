import { OrderDetail } from "@/interfaces/order";
import { OrderState } from "./OrderState";
import { CompletedState } from "./CompletedState";
import { CancelledState } from "./CanceledState";

export class PendingState extends OrderState {
    getStatus(): string {
        return "Pendiente";
    }

    completeOrder(): void {
        this.order.setState(new CompletedState(this.order));
        console.log("Order marked as completed.");
    }

    cancelOrder(): void {
        this.order.setState(new CancelledState(this.order));
        console.log("Order marked as cancelled.");
    }

    notify(): string {
        return "Order notification sent.";
    }

    modifyOrderDetails(newDetails: OrderDetail[]): void {
        this.order.orderDetail = newDetails;
        console.log("Order details modified in pending state.");
    }
}
