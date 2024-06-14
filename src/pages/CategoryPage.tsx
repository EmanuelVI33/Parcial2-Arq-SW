import { CreateOrEditCategory } from "@/components/category/CreateOrEditCategory";
import TableCategory from "@/components/category/TableCategory";

export default function CategoryPage() {
  return (
    <section className="w-11/12 m-auto">
      <div className="flex justify-between my-4">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
              Categorías
          </h1>
          <CreateOrEditCategory />
      </div>

      <TableCategory />
    </section>
  )
}
