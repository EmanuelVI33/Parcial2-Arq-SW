import { Product } from "./product";

export interface Order {
    id: string;
    total: number;
    orderDetail: OrderDetail[];
}

export interface OrderDetail {
    product: Product;
    amount: number;
    unitPrice: number;
    subTotal: number;
}