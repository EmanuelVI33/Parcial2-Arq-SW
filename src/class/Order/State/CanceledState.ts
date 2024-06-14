import { OrderState } from "./OrderState";

export class CancelledState extends OrderState {
    completeOrder(): void {
        console.log("Cannot complete cancelled order.");
    }

    cancelOrder(): void {
        console.log("Order is already cancelled.");
    }

    notify(): void {
        console.log("Order notification sent.");
    }
}

