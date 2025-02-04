import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createCategoryService,
  deleteCategoryService,
  getCategoriesService,
  getCategoryService,
  toggleActiveCategoryService,
  updateCategoryService,
} from "../services/category";

export const useCategories = (status, page) =>
  useQuery({
    queryKey: ["categories", status, page],
    queryFn: () => getCategoriesService({ status, page }),
  });

export const useDeleteCategory = () =>
  useMutation({
    mutationKey: ["delete-category"],
    mutationFn: (id) => deleteCategoryService(id),
  });

export const useToggleActiveCategory = () =>
  useMutation({
    mutationKey: ["toggle-category"],
    mutationFn: (id) => toggleActiveCategoryService(id),
  });

export const useUpdateCategory = () =>
  useMutation({
    mutationKey: ["update-category"],
    mutationFn: ({ id, data }) => updateCategoryService({ id, data }),
  });

export const useCreateCategory = () =>
  useMutation({
    mutationKey: ["create-category"],
    mutationFn: (data) => createCategoryService(data),
  });

export const useCategory = (id) =>
  useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoryService(id),
  });
