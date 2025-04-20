import { useMutation, useQuery } from "@tanstack/react-query";
import {
  brandListBySlug,
  createBrandService,
  deleteBrandService,
  getBrandListService,
  getBrandService,
  toggleActiveBrandService,
  updateBrandService,
} from "../services/brand";

export const useBrandList = () =>
  useQuery({
    queryKey: ["brand-list"],
    queryFn: getBrandListService,
  });

export const useBrand = (id) =>
  useQuery({
    queryKey: ["brand", id],
    queryFn: () => getBrandService(id),
  });

export const useCreateBrand = () =>
  useMutation({
    mutationKey: ["create-brand"],
    mutationFn: (data) => createBrandService(data),
  });

export const useUpdateBrand = () =>
  useMutation({
    mutationKey: ["update-brand"],
    mutationFn: ({ id, data }) => updateBrandService({ id, data }),
  });

export const useBrandListBySlug = (slug) =>
  useQuery({
    queryKey: ["brand-list", slug],
    queryFn: () => brandListBySlug(slug),
  });

export const useToggleActiveBrand = () => {
  return useMutation({
    mutationKey: ["toggle-active-brand"],
    mutationFn: (id) => toggleActiveBrandService(id),
  });
};

export const useDeleteBrand = () =>
  useMutation({
    mutationKey: ["delete-brand"],
    mutationFn: (id) => deleteBrandService(id),
  });
