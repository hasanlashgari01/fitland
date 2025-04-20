import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import {
  createCategoryService,
  deleteCategoryService,
  getCategoriesService,
  getCategoryBySlugService,
  getCategoryListService,
  getCategoryService,
  getUserCategoryListService,
  toggleActiveCategoryService,
  updateCategoryService,
} from "../services/category";
import useFilter from "./useFilter";

export const useCategories = (status, page) =>
  useQuery({
    queryKey: ["categories", status, page],
    queryFn: () => getCategoriesService({ status, page }),
  });

export const useUserCategoryList = () =>
  useQuery({
    queryKey: ["user-category-list"],
    queryFn: getUserCategoryListService,
  });

export const useCategoryList = () =>
  useQuery({
    queryKey: ["category-list"],
    queryFn: getCategoryListService,
    placeholderData: keepPreviousData,
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

export const useCategoryBySlug = (slug) => {
  const { isInventory, isOff, sort } = useFilter();

  return useQuery({
    queryKey: ["category", slug, isInventory, isOff, sort],
    queryFn: () => getCategoryBySlugService(slug, isInventory, isOff, sort),
  });
};
