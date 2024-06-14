import { axiosClient } from "@/constant/axiosClient";
import { Product, ProductMutate } from "@/interfaces/product";

export const createProduct = async (product: ProductMutate) : Promise<Product> => {
  return await axiosClient.post("/products", product);
};
  
export const getProducts = async (): Promise<Array<Product>> => {
  try {
    const response = await axiosClient.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error getting programs:", error);
    throw error;
  }
};

export const updateProduct = async (product: ProductMutate) : Promise<Product> => {
  return await axiosClient.patch(`/products/${product.id}`, product);
};

export const deleteProduct = async (productId: string) => {
  return await axiosClient.delete(`/products/${productId}`);
};