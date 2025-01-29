import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteProductService, getProductItemService, getProductsService } from "../services/products";

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
    mutationKey: ["product"],
    mutationFn: (productId) => deleteProductService(productId),
  });
