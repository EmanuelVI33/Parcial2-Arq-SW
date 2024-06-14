import { DiscountStrategy } from "./DiscountStrategy";

// Implementaciones concretas del procesador de órdenes
export class NoDiscountStrategy implements DiscountStrategy {
    applyDiscount(total: number): number {
        return total;
    }
}