import { useQuery } from "@tanstack/react-query";
import { getBrandListService } from "../services/brand";

export const useBrandList = () =>
  useQuery({
    queryKey: ["brand-list"],
    queryFn: getBrandListService,
  });
