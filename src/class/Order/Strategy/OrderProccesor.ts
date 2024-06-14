import { OrderDetail } from "@/interfaces/order";
import { DiscountStrategy } from "./DiscountStrategy";

export class OrderProcessor {
    private strategy: DiscountStrategy;

    constructor(strategy: DiscountStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: DiscountStrategy): void {
        this.strategy = strategy;
    }

    calculateTotal(orderDetail: OrderDetail[]): number {
        const total = orderDetail.reduce((acc, detail) => acc + detail.subTotal, 0);
        return total;
    }

    calculateTotalWithDiscount(orderDetail: OrderDetail[]): number {
        const total = this.calculateTotal(orderDetail);
        return this.strategy.applyDiscount(total);
    }
}
