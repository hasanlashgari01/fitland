import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { usePage } from "../../../context/admin-page-context";
import { useBrand, useCreateBrand, useUpdateBrand } from "../../../hooks/useBrand";

const BrandForm = ({ refetch }) => {
  const { selectedItem, cancelHandler } = usePage();
  const { data, isLoading } = useBrand(selectedItem);
  const { mutate: createMutate } = useCreateBrand();
  const { mutate: updateMutate } = useUpdateBrand(selectedItem);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    name: "",
    slug: "",
  });

  useEffect(() => {
    if (selectedItem && !isLoading) {
      setValue("name", data.name);
      setValue("slug", data.slug);
    }
  }, [selectedItem, isLoading]);

  const onSubmit = (data) => {
    if (selectedItem) {
      updateMutate({ id: selectedItem, data });
    } else {
      createMutate(data);
    }

    cancelHandler();
    setTimeout(() => {
      refetch();
    }, 100);
  };

  return (
    <div className="modal-container" onClick={cancelHandler}>
      <form className="form-modal" onSubmit={handleSubmit(onSubmit)} onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-semibold">{selectedItem ? "به روز رسانی" : "ایجاد"} برند</h2>
        <div className="mt-8 grid gap-y-8">
          <div>
            <label className="flex items-center justify-between text-sm">
              <span>عنوان برند *</span>
              <span className="text-red-500">{errors.name?.message}</span>
            </label>
            <input
              type="text"
              className={`form-input ${errors.name && "border-red-500"}`}
              {...register("name", {
                required: "عنوان برند الزامی است",
                minLength: { value: 3, message: "عنوان برند بیشتر از ۳ کاراکتر باشد" },
              })}
            />
          </div>
          <div>
            <label className="flex items-center justify-between text-sm">
              <span>آدرس برند *</span>
              <span className="text-red-500">{errors.slug?.message}</span>
            </label>
            <input
              type="text"
              className={`form-input ${errors.slug && "border-red-500"}`}
              dir="ltr"
              {...register("slug", {
                required: "آدرس الزامی است",
                minLength: { value: 3, message: "آدرس بیشتر از ۳ کاراکتر باشد" },
              })}
            />
          </div>
        </div>
        <button type="submit" className="bg-primary-500 mt-8 w-full cursor-pointer rounded-lg py-3 text-white">
          {selectedItem ? "به روز رسانی" : "ایجاد"}
        </button>
      </form>
    </div>
  );
};

export default BrandForm;
