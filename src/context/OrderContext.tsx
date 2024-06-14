import { Product } from "@/interfaces/product";
import { createContext, ReactNode, useReducer } from 'react';
import { Order, OrderDetail } from '../interfaces/order';
import { OrderProcessor } from "@/class/Order/Strategy/OrderProccesor";
import { NoDiscountStrategy } from "@/class/Order/Strategy/NoDiscountStrategy";
import { DiscountStrategy } from "@/class/Order/Strategy/DiscountStrategy";
import { OrderStageContext } from "@/class/Order/State/OrderStageContext";
import { toast } from "sonner";

// Estado inicial y tipos de acciones
interface OrderState {
    orders: { [key: string]: Order };
    orderDetail: OrderDetail[];
    processor: OrderProcessor;
}

type Action =
    | { type: 'ADD_ORDER'; }
    | { type: 'ADD_PRODUCT'; payload: { product: Product; amount: number } }
    | { type: 'CLEAR_ORDER_DETAIL' }
    | { type: 'SAVE_ORDER' }
    | { type: 'DELETE_PRODUCT'; payload: { index: number } }
    | { type: 'SET_PROCESSOR'; payload: { strategy: DiscountStrategy } }
    // Acciones de State
    | { type: 'COMPLETE_ORDER'; payload: { id: string } }
    | { type: 'CANCEL_ORDER'; payload: { id: string } }
    | { type: 'NOTIFY_ORDER'; payload: { id: string } }
    | { type: 'MODIFY_ORDER_DETAILS'; payload: { id: string; newDetails: OrderDetail[] } }
    | { type: 'GENERATE_INVOICE'; payload: { id: string } }
    | { type: 'CHANGE_STATE'; payload: { id: string; newState: string } };  

const orderReducer = (state: OrderState, action: Action): OrderState => {
    switch (action.type) {
        case 'ADD_ORDER': {
            // Calcultar con strategy
            const total = state.processor.calculateTotalWithDiscount(state.orderDetail);
            // Crear order con descuento aplicado
            const newOrder = new OrderStageContext(state.orderDetail, total);

            return {
                ...state,
                orders: {
                    ...state.orders,
                    [newOrder.id]: newOrder,
                },
                orderDetail: [], // Limpiar detalles del pedido después de agregar el pedido
            };
        }
        case 'ADD_PRODUCT': {
            const { product, amount } = action.payload;
            const subTotal = Number(product.salePrice) * amount;
            const detail: OrderDetail = {
                product,
                unitPrice: Number(product.salePrice),
                amount,
                subTotal,
            };
            const productExists = state.orderDetail.some(d => d.product.id === product.id);
            if (productExists) {
                return state;
            }
            return {
                ...state,
                orderDetail: [...state.orderDetail, detail],
            };
        }
        case 'CLEAR_ORDER_DETAIL':
            return {
                ...state,
                orderDetail: [],
            };
        case 'SAVE_ORDER':
            console.log(state.orderDetail);
            return {
                ...state,
                orderDetail: [],
            };
        case 'DELETE_PRODUCT': {
            const newOrderDetails = [...state.orderDetail];
            newOrderDetails.splice(action.payload.index, 1); // Elimina el elemento en el índice especificado
            return {
                ...state,
                orderDetail: newOrderDetails,
            };
        }
        case 'SET_PROCESSOR':
            state.processor.setStrategy(action.payload.strategy);
            return { ...state };

        // Estado
        case 'COMPLETE_ORDER': {
            const order = state.orders[action.payload.id];
            order.completeOrder();
            return { ...state };
        }
        case 'CANCEL_ORDER': {
            const order = state.orders[action.payload.id];
            order.cancelOrder();
            return { ...state };
        }
        case 'NOTIFY_ORDER': {
            const order = state.orders[action.payload.id];
            order.notify();
            return { ...state };
        }
        case 'MODIFY_ORDER_DETAILS': {
            const order = state.orders[action.payload.id];
            order.modifyOrderDetails(action.payload.newDetails);
            return { ...state };
        }
        case 'GENERATE_INVOICE': {
            const order = state.orders[action.payload.id];
            order.generateInvoice();
            return { ...state };
        }
        case 'CHANGE_STATE': {
            console.log(`Cambiando de estado`);
            const { id, newState } = action.payload;
            const order = state.orders[id];
            try {
                order.changeState(newState);
                // Notificar
                toast.success(order.notify());
            } catch (error) {
                toast.error(error.message);
            }
            return { ...state };
        }
        default:
            return state;
    }
};

interface OrderContextType {
    order: { [key: string]: Order };
    handleAddOrder: () => void;
    // Order deetail
    orderDetail: OrderDetail[];
    handleAddProduct: (product: Product, amount: number) => void;
    handleClear: () => void;
    handleDelete: (index: number) => void;
    // Strategy
    setProcessor: (strategy: DiscountStrategy) => void;
    // State
    completeOrder: (id: string) => void;
    cancelOrder: (id: string) => void;
    notifyOrder: (id: string) => void;
    modifyOrderDetails: (id: string, newDetails: OrderDetail[]) => void;
    generateInvoice: (id: string) => void;

    changeOrderState: (id: string, newState: string) => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);
  
type OrderProviderProp =  {
    children: ReactNode;
}

// Estado inicial
const initialState: OrderState = {
    orders: {},
    orderDetail: [],
    processor: new OrderProcessor(new NoDiscountStrategy()),
};

export const OrderProvider = ({ children }: OrderProviderProp) => {
    const [state, dispatch] = useReducer(orderReducer, initialState);
    const { orderDetail } = state;

    const handleAddOrder = () => {
        dispatch({ type: 'ADD_ORDER' });
    };

    const handleAddProduct = (product: Product, amount: number) => {
        dispatch({ type: 'ADD_PRODUCT', payload: { product, amount } });
    };

    const handleClear = () => {
        dispatch({ type: 'CLEAR_ORDER_DETAIL' });
    };

    const handleDelete = (index: number) => {
        dispatch({ type: 'DELETE_PRODUCT', payload: { index } });
    };

    const setProcessor = (strategy: DiscountStrategy) => {
        dispatch({ type: 'SET_PROCESSOR', payload: { strategy } });
    };

    const completeOrder = (id: string) => {
        dispatch({ type: 'COMPLETE_ORDER', payload: { id } });
    };

    const cancelOrder = (id: string) => {
        dispatch({ type: 'CANCEL_ORDER', payload: { id } });
    };

    const notifyOrder = (id: string) => {
        dispatch({ type: 'NOTIFY_ORDER', payload: { id } });
    };

    const modifyOrderDetails = (id: string, newDetails: OrderDetail[]) => {
        dispatch({ type: 'MODIFY_ORDER_DETAILS', payload: { id, newDetails } });
    };

    const generateInvoice = (id: string) => {
        dispatch({ type: 'GENERATE_INVOICE', payload: { id } });
    };

    const changeOrderState = (id: string, newState: string) => {
        dispatch({ type: 'CHANGE_STATE', payload: { id, newState } });
    };

    return (
        <OrderContext.Provider value={{
            order: state.orders,
            handleAddOrder,
            orderDetail,
            handleAddProduct,
            handleClear,
            handleDelete,
            // Cambiar el tipo de stratetegia
            setProcessor,
            // State
            completeOrder,
            cancelOrder,
            notifyOrder,
            modifyOrderDetails, 
            generateInvoice,

            changeOrderState,
        }}>
            {children}
        </OrderContext.Provider>
    );
};
  