import { DiscountStrategy } from "./DiscountStrategy";

export class FifteenPercentDiscountStrategy implements DiscountStrategy {
    applyDiscount(total: number): number {
        return total * 0.85; // 15% discount
    }
}