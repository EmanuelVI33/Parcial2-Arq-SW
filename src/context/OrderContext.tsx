import { Product } from "@/interfaces/product";
import { createContext, ReactNode, useState } from "react";
import { Order, OrderDetail } from '../interfaces/order';
import { v4 as uuidv4 } from 'uuid';

interface OrderContextType {
    // Order
    order: OrderState;
    handleAddOrder: () => void
    
    // Order datail
    orderDetail: OrderDetail[];
    handleAddProduct: (product: Product, amount: number) => void;
    handleClear: () => void;
    handleSaveOrder: () => void;
    handleDelete: (index: number) => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);
  
type OrderProviderProp =  {
    children: ReactNode;
}

interface OrderState {
    [key: string]: Order;
  }

export const OrderProvider = ({ children }: OrderProviderProp) => {
    const [order, setOrder] = useState<OrderState>({});
    const [orderDetail, setOrderDetail] = useState<OrderDetail[]>([]);

    const handleAddOrder = () => {
        const total = orderDetail.reduce((total, detail) => total + detail.subTotal, 0);
        const newOrder: Order = {
            id: uuidv4(),
            total,
            orderDetail: [...orderDetail],
        };

        setOrder((prevOrders) => ({
            ...prevOrders,
            [newOrder.id]: newOrder,
        }));
        setOrderDetail([]); // Clear order details after adding order
    };

    const handleAddProduct = (product: Product, amount: number) => {
        console.log(product, amount);
        const { salePrice } = product;
        const subTotal = Number(salePrice) * amount;
 
        const detail: OrderDetail = { 
            product: product, 
            unitPrice: Number(salePrice), 
            amount, 
            subTotal,
        };

        setOrderDetail(orderDetail => {
            const productExists = orderDetail.some(detail => detail.product.id === product.id);
        
            if (productExists) {
              return orderDetail;
            }
        
            return [...orderDetail, detail];
        });
    }

    const handleClear = () => {
        setOrderDetail([]);
    }
    
    const handleSaveOrder = () => {
        console.log(orderDetail);
        handleClear();
    }

    const handleDelete = (index: number)  => {
        setOrderDetail(prevOrderDetails => {
            const newOrderDetails = [...prevOrderDetails];
            newOrderDetails.splice(index, 1); // Elimina el elemento en el índice especificado
            return newOrderDetails;
        });
    }

    return <OrderContext.Provider value={{ 
       order,
       handleAddOrder,
       orderDetail,
       handleAddProduct,
       handleClear,
       handleSaveOrder,
       handleDelete,
    }}>
        {children}
    </OrderContext.Provider>;
};
  