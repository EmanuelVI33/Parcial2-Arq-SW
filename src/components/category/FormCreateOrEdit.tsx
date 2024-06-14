import { useForm } from "react-hook-form";
import * as z from "zod";
import { useCategory } from "@/hooks/category/use-category";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogClose } from "@radix-ui/react-dialog";


interface FormCreateOrEditProps {
  handleSaveSuccess: () => void;
}

const formSchema = z.object({
    name: z.string().min(3),
    description: z.string(),
  });

function FormCreateOrEdit({ handleSaveSuccess } : FormCreateOrEditProps) {
    const { createCategory } = useCategory();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          description: "",
        },
      });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            const response = createCategory(values);
            handleSaveSuccess();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <>
        <Form {...form}>
          <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=""
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="descripción" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between mt-5">
                  <DialogClose className="" >
                      <Button>Cancelar</Button>
                  </DialogClose>

                  <Button type="submit" className="">Crear</Button>
                </div>
              </form>
        </Form>
      </>);
}

export default FormCreateOrEdit
