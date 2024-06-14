import { createCategory, getCategories } from "@/api/category-api";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
};

export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });
};

// export const useUpdateProgramMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: updateProgram,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["program"] });
//     },
//   });
// };

// export const useDeleteProgramMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: deleteProgram,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["program"] });
//     },
//   });
// };


