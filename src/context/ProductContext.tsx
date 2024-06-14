import { Product } from "@/interfaces/product";
import { createContext, ReactNode, useReducer } from "react";

export enum ProductActionTypes {
    SET_PRODUCT = 'SET_PRODUCT',
    TOGLE_MODAL = 'TOGLE_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',
    SAVE_MODAL = 'SAVE_MODAL',
    TOGLE_MODAL_DELETE = 'TOGLE_MODAL_DELTE',
    OPEN_MODAL_DELETE = 'OPEN_MODAL_DELTE',
    SAVE_DELETE_MODAL = 'SAVE_DELETE_MODAL'
}

type State = {
    product: Product | null;
    open: boolean;
    openDelete: boolean;
};
  
type Action =
    | { type: ProductActionTypes.SET_PRODUCT; payload: Product | null }
    | { type: ProductActionTypes.TOGLE_MODAL }
    | { type: ProductActionTypes.CLOSE_MODAL }
    | { type: ProductActionTypes.SAVE_MODAL }
    | { type: ProductActionTypes.TOGLE_MODAL_DELETE }
    | { type: ProductActionTypes.SAVE_DELETE_MODAL}
    | { type: ProductActionTypes.OPEN_MODAL_DELETE; payload: Product }

const initialState: State = {
    product: null,
    open: false,
    openDelete: false,
};

const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case ProductActionTypes.SET_PRODUCT:
            return { ...state, open: true, product: action.payload };
        case ProductActionTypes.TOGLE_MODAL:
            return { ...state, open: !state.open, product: null };
        case ProductActionTypes.CLOSE_MODAL:
            return { ...state, open: false, product: null };
        case ProductActionTypes.SAVE_MODAL:
            return { ...state, open: false, product: null };
        case ProductActionTypes.TOGLE_MODAL_DELETE:
            return { ...state, openDelete: !state.openDelete, product: null };     
        case ProductActionTypes.OPEN_MODAL_DELETE:
            return { ...state, openDelete: true, product: action.payload };     
        case ProductActionTypes.SAVE_DELETE_MODAL:
            return { ...state, openDelete: false, product: null };
        default:
            return state;
    }
};

interface ProductContextType {
    product: Product | null;
    open: boolean;
    openDelete: boolean;
    handleOpenModal: (value: boolean) => void;
    handleSaveModal: () => void;
    handleSetProduct: (product: Product | null) => void;
    handleCloseModal: () => void;
    handleTogleModalDelete: () => void;
    handleSaveModalDelete: () => void;
    handleOpenModalDelete: (product: Product) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);
  
type ProductProviderProp =  {
    children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProp) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { open, openDelete, product } = state;
    
    const handleOpenModal = () => {
        dispatch({type: ProductActionTypes.TOGLE_MODAL});
    };

    const handleSaveModal = () => {
        dispatch({type: ProductActionTypes.SAVE_MODAL});
    }

    const handleCloseModal = () => {
        dispatch({type: ProductActionTypes.CLOSE_MODAL});
    }

    const handleSetProduct = (product: Product | null) => {
        dispatch({type: ProductActionTypes.SET_PRODUCT, payload: product});
    }

    const handleTogleModalDelete = () => {
        dispatch({type: ProductActionTypes.TOGLE_MODAL_DELETE})
    }

    const handleOpenModalDelete = (product: Product) => {
        dispatch({type: ProductActionTypes.OPEN_MODAL_DELETE, payload: product});
    }

    const handleSaveModalDelete = () => {
        dispatch({type: ProductActionTypes.SAVE_DELETE_MODAL});
    }

    return <ProductContext.Provider value={{ 
        open, 
        openDelete,
        product, 
        handleOpenModal, 
        handleSaveModal, 
        handleCloseModal, 
        handleSetProduct, 
        handleOpenModalDelete,
        handleTogleModalDelete, 
        handleSaveModalDelete, 
    }}>
        {children}
    </ProductContext.Provider>;
};
  