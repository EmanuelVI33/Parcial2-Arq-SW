import { CreateOrEditProduct } from "@/components/product/CreateOrEditProduct";
import DeleteProduct from "@/components/product/DeleteProduct";
import TableProduct from "@/components/product/TableProduct";

export default function ProductPage() {
  return (
    <section className="w-11/12 m-auto">
      <div className="flex justify-between my-4">
          <h1 className="scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight">
              Productos
          </h1>
          <CreateOrEditProduct />
      </div>

      <TableProduct />
      <DeleteProduct />
    </section>
  )
}
