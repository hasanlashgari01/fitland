import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProductService,
  deleteProductService,
  getLatestShoes,
  getProductBySlugService,
  getProductItemService,
  getProductsService,
  getSpecialOffer,
  toggleStatusProductService,
} from "../services/products";

export const useProducts = (page) =>
  useQuery({
    queryKey: ["products", page],
    queryFn: () => getProductsService(page),
  });

export const useProductItem = (productId) =>
  useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductItemService(productId),
  });

export const useDeleteProduct = () =>
  useMutation({
    mutationKey: ["delete-product"],
    mutationFn: (productId) => deleteProductService(productId),
  });

export const useCreateProduct = () =>
  useMutation({
    mutationKey: ["create-product"],
    mutationFn: (data) => createProductService(data),
  });

export const useToggleStatusProduct = () =>
  useMutation({
    mutationKey: ["toggle-status-product"],
    mutationFn: (productId) => toggleStatusProductService(productId),
  });

export const useProductBySlug = (slug) =>
  useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlugService(slug),
  });

export const useSpecialOffer = () =>
  useQuery({
    queryKey: ["special-product"],
    queryFn: getSpecialOffer,
  });

export const useLatestShoes = () =>
  useQuery({
    queryKey: ["latest-shoes"],
    queryFn: getLatestShoes,
  });
