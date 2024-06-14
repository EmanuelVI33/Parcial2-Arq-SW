import { OrderDetail } from "@/interfaces/order";
import { OrderState } from "./OrderState";
import { OrderStageContext } from "./OrderStageContext";
import { CompletedState } from "./CompletedState";
import { CancelledState } from "./CanceledState";

export class PendingState implements OrderState {
    constructor(private order: OrderStageContext) {}

    completeOrder(): void {
        this.order.setState(new CompletedState(this.order));
    }

    cancelOrder(): void {
        this.order.setState(new CancelledState(this.order));
    }

    notify(): void {
        console.log("Order notification sent.");
    }

    modifyOrderDetails(newDetails: OrderDetail[]): void {
        this.order.orderDetail = newDetails;
        console.log("Order details modified in pending state.");
    }

    generateInvoice(): void {
        console.log("Invoice generated for pending order.");
    }
}