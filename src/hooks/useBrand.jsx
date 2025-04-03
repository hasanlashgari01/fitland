import { useQuery } from "@tanstack/react-query";
import { brandListBySlug, getBrandListService } from "../services/brand";

export const useBrandList = () =>
  useQuery({
    queryKey: ["brand-list"],
    queryFn: getBrandListService,
  });

export const useBrandListBySlug = (slug) =>
  useQuery({
    queryKey: ["brand-list-slug"],
    queryFn: () => brandListBySlug(slug),
  });
