import { OrderState } from "./OrderState";

export class CompletedState extends OrderState {
    completeOrder(): void {
        console.log("Order is already completed.");
    }

    cancelOrder(): void {
        console.log("Cannot cancel order after completion.");
    }

    notify(): void {
        console.log("Order notification sent.");
    }
}

