import { CategoryUpdate } from "./category";

interface ProductBase {
    id?: string,
    name: string;
    description?: string;
    salePrice: number | string;
    purchasePrice?: number | string;
    stock: number | string;
}

export interface ProductMutate extends ProductBase {
    categoryId: number | string;
}

export interface Product extends ProductBase {
    category: CategoryUpdate;
}


