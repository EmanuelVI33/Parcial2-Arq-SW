import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "@/layout/Layout";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./context/ProductContext";
import OrderPage from "./pages/OrderPage";
import { OrderProvider } from "./context/OrderContext";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [   
        {
            index: true,
            element: <HomePage />
        },
        {
            path: "categories",
            element: <CategoryPage />
        },
        {
          path: "products",
          element: (
            <ProductProvider>
              <ProductPage />
            </ProductProvider>
          ),
        },
        {
          path: "orders",
          element: (
            <OrderProvider>
              <OrderPage />
            </OrderProvider>
          ),
        },
      ]
    },
  ]);