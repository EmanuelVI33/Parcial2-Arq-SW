import { ReactElement } from "react"
import { CustomDialog } from "../ui/custom-dialog"

interface Props {
    children: ReactElement;
    title: string;
    titleButton: string;
}   

export default function CreateOrEdit({title = "Creando", titleButton = "crear", children} : Props) {
    return (
        <CustomDialog title={title} titleButton={titleButton}>
            {children}
        </CustomDialog>
    )
}
