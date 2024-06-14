import {
  Dialog as DialogShadcn,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { createContext, PropsWithChildren, ReactElement, ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"

type DialogProps = {
    children?: ReactElement | ReactNode
    childrenFooter?: ReactElement | ReactNode
    title: string
    titleButton: string
}

interface CustomDialogContextProps {
    open: boolean;
    handleTogle: () => void;
}

export const CustomDialogContext = createContext({} as CustomDialogContextProps);
const { Provider } = CustomDialogContext;

export function CustomDialog({ children, titleButton, title } : PropsWithChildren<DialogProps>) {
    const [open, setOpen] = useState(false);

    const handleTogle = () => {
        setOpen((open) => !open);
    }

    return (
        <Provider value={{
            open,
            handleTogle,
        }}>
            <DialogShadcn open={open} onOpenChange={handleTogle}>
                <Button onClick={() => handleTogle()}>{titleButton}</Button>
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    {children}
                </DialogContent>
            </DialogShadcn>
        </Provider>
    )
}


