export interface DiscountStrategy {
    applyDiscount(total: number): number;
}