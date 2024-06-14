import { axiosClient } from "@/constant/axiosClient";
import { CategoryCreate, CategoryUpdate } from "@/interfaces/category";

export const createCategory = async (category: CategoryCreate) : Promise<CategoryUpdate> => {
    try {
      const response = await axiosClient.post("/categories", category);
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  };
  
  export const getCategories = async (): Promise<Array<CategoryUpdate>> => {
    try {
      const response = await axiosClient.get("/categories");
      return response.data;
    } catch (error) {
      console.error("Error getting programs:", error);
      throw error;
    }
  };