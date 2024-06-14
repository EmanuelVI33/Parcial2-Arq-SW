import { OrderState } from "./OrderState";

export class CancelledState extends OrderState {
    getStatus(): string {
        return "Cancelado";
    }

    completeOrder(): void {
        throw new Error("Cannot complete cancelled order.");
    }

    cancelOrder(): void {
        throw new Error("Order is already cancelled.");
    }

    notify(): string {
        return "Order notification sent.";
    }
}

