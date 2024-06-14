import {  OrderDetail } from "@/interfaces/order";
import { OrderStageContext } from "./OrderStageContext";

export abstract class OrderState {
    protected order: OrderStageContext;

    constructor(order: OrderStageContext) {
        this.order = order;
    }

    abstract getStatus(): string;

    completeOrder(): void {
        throw new Error("Cannot complete order in the current state.");
    }

    cancelOrder(): void {
        throw new Error("Cannot cancel order in the current state.");
    }

    notify(): string {
        throw new Error("Cannot notify in the current state.");
    }

    modifyOrderDetails(newDetails: OrderDetail[]): void {
        throw new Error("Cannot modify order details in the current state.");
    }

    generateInvoice(): void {
        throw new Error("Cannot generate invoice in the current state.");
    }

    changeState(newState: string): void {
        switch (newState) {
            case 'Completado':
                this.completeOrder();
                break;
            case 'Cancelado':
                this.cancelOrder();
                break;
            default:
                throw new Error(`Transición a ${newState} no permitida desde el estado actual.`);
        }
    }
}
