import { useMutation } from "@tanstack/react-query";
import { getDiscountByCode } from "../services/discount";

export const useDiscountByCode = () =>
  useMutation({
    mutationKey: ["discount-code"],
    mutationFn: (code) => getDiscountByCode(code),
  });
