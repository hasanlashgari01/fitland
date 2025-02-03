import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCategoryService, getCategoriesService, toggleActiveCategoryService } from "../services/category";

export const useCategories = (status, page) =>
  useQuery({
    queryKey: ["categories", status, page],
    queryFn: () => getCategoriesService({ status, page }),
  });

export const useDeleteCategory = () =>
  useMutation({
    mutationKey: ["delete-category"],
    mutationFn: (categoryId) => deleteCategoryService(categoryId),
  });

export const useToggleActiveCategory = () =>
  useMutation({
    mutationKey: ["toggle-category"],
    mutationFn: (categoryId) => toggleActiveCategoryService(categoryId),
  });
