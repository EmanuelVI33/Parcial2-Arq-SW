import { CreateOrder } from "@/components/order/CreateOrder"
import TableOrder from "@/components/order/TableOrder"

function OrderPage() {
    return (
    <section className="w-11/12 m-auto">
      <div className="flex justify-between my-4">
          <h1 className="scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight">
              Pedidos
          </h1>

          <CreateOrder />
      </div>

      <TableOrder />
    </section>
    )
}

export default OrderPage
