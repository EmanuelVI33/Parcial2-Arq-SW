import { DiscountStrategy } from "./DiscountStrategy";

export class TenPercentDiscountStrategy implements DiscountStrategy {
    applyDiscount(total: number): number {
        return total * 0.90; // 10% discount
    }
}