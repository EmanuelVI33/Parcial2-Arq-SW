import { OrderState } from "./OrderState";

export class CompletedState extends OrderState {
    getStatus(): string {
        return "Completado";
    }

    completeOrder(): void {
        throw new Error("Order is already completed.");
    }

    cancelOrder(): void {
        throw new Error("Cannot cancel order after completion.");
    }

    notify(): string {
        return "Order notification sent.";
    }

    generateInvoice(): void {
        console.log("Factura generada");
    }
}

