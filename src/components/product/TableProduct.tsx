import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button";
import { useTableProduct } from "@/hooks/product/use-table-product";

function TableProduct() {
    const {
        handleSetProduct,
        handleOpenModalDelete,
        products = [],
        isLoading,
        isError,
        error,
    } = useTableProduct();

    if (isError) {
        return <h1>{error?.message ?? 'Error al cargar los productos'}</h1>
    }

    if (isLoading) {
        return <h1>Cargando...</h1>;
    }

    return (
        <Table>
            <TableCaption>Lista de productos</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Código</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead>Precio de venta</TableHead>
                    <TableHead>Precio de compra</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead className="text-center">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products && products.map(product => {
                    return (
                        <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>{product.salePrice}</TableCell>
                            <TableCell>{product.purchasePrice}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell>{product.category ? product.category.name : 'Sin categoría'}</TableCell>
                            <TableCell className="text-center flex justify-around">
                                <Button onClick={() => handleSetProduct(product)}>
                                    <span className="mr-2">Editar</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/></svg>
                                </Button>
                                <Button onClick={() => handleOpenModalDelete(product)}>
                                    <span className="mr-2">Eliminar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                                </Button>
                            </TableCell>
                        </TableRow>
                    );
                }
                )}
            </TableBody>
        </Table>
    )
}

export default TableProduct
