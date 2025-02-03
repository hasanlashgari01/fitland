import { useForm } from "react-hook-form";
import { useCategory, useCreateCategory, useUpdateCategory } from "../../../hooks/useCategory";
import { useEffect } from "react";

const CategoryForm = ({ id, cancelHandler, refetch }) => {
  const { data, isLoading } = useCategory(id);
  const { mutate: createMutate } = useCreateCategory();
  const { mutate: updateMutate } = useUpdateCategory(id);
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
    if (id && !isLoading) {
      setValue("name", data.name);
      setValue("slug", data.slug);
    }
  }, [id, isLoading]);

  const onSubmit = (data) => {
    if (id) {
      updateMutate({ id, data });
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
        <h2 className="text-lg font-semibold">{id ? "به روز رسانی" : "ایجاد"} دسته</h2>
        <div className="mt-8 grid gap-y-8">
          <div>
            <label className="flex items-center justify-between text-sm">
              <span>عنوان دسته *</span>
              <span className="text-red-500">{errors.name?.message}</span>
            </label>
            <input
              type="text"
              className={`form-input ${errors.name && "border-red-500"}`}
              {...register("name", {
                required: "عنوان دسته الزامی است",
                minLength: { value: 3, message: "عنوان دسته بیشتر از ۳ کاراکتر باشد" },
              })}
            />
          </div>
          <div>
            <label className="flex items-center justify-between text-sm">
              <span>آدرس دسته *</span>
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
          {id ? "به روز رسانی" : "ایجاد"}
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
