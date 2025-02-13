import { useEffect, useState } from "react";
import Select from "react-select";
import Loading from "../../components/loading";
import Input from "../../features/admin/components/input";
import InputRadio from "../../features/admin/components/input-radio";
import { useBrandList } from "../../hooks/useBrand";
import { useCategoryList } from "../../hooks/useCategory";
import { useCreateProduct } from "../../hooks/useProduct";
import ImageUploadList from "../../features/admin/components/image-upload-list";

const AdminProductCreatePage = () => {
  const { data: categories, isLoading: isLoadingCategory } = useCategoryList();
  const { data: brands, isLoading: isLoadingBrand } = useBrandList();
  const { mutate } = useCreateProduct();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 100000,
    discount: 0,
    status: "ACTIVE",
    inventory: 100,
    categoryId: null,
    brand: "",
    images: [],
  });

  useEffect(() => {
    setForm({ ...form, categoryId: selectedCategory?.value });
  }, [selectedCategory]);

  useEffect(() => {
    setForm({ ...form, brand: selectedBrand?.value });
  }, [selectedBrand]);

  if (isLoadingCategory && isLoadingBrand) {
    return <Loading />;
  }

  const categoriesOptions = categories?.map((category) => ({ value: category._id, label: category.name }));
  const brandsOptions = brands?.map((category) => ({ value: category._id, label: category.name }));

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image.file);
    });

    for (let i in form) {
      formData.append(i, form[i]);
    }

    mutate(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-lg font-semibold">ایجاد محصول</h2>
      <div className="my-8 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        <Input label="عنوان" name="name" value={form.name} changeHandler={changeHandler} />
        <Input label="قیمت" name="price" value={form.price} changeHandler={changeHandler} />
        <Input label="توضیحات" name="description" value={form.description} changeHandler={changeHandler} />
        <Input label="موجودی" name="inventory" value={form.inventory} changeHandler={changeHandler} />
        <Input label="تخفیف" name="discount" value={form.discount} changeHandler={changeHandler} />
        <div>
          <div className="flex items-center justify-between text-sm">
            <span>وضعیت محصول *</span>
          </div>
          <div className="mt-2 flex gap-5">
            <InputRadio
              id="field-active"
              name="status"
              value="ACTIVE"
              onChange={changeHandler}
              label="فعال"
              defaultChecked
            />
            <InputRadio id="field-inactive" name="status" value="INACTIVE" onChange={changeHandler} label="غیرفعال" />
          </div>
        </div>
        <div>
          <span>دسته بندی محصول *</span>
          <Select
            defaultValue={selectedCategory}
            onChange={setSelectedCategory}
            options={categoriesOptions}
            className="mt-2"
          />
        </div>
        <div>
          <span>برند محصول *</span>
          <Select defaultValue={selectedBrand} onChange={setSelectedBrand} options={brandsOptions} className="mt-2" />
        </div>
      </div>
      <ImageUploadList images={images} setImages={setImages} />

      <button type="submit" className="bg-primary-500 mt-8 w-24 cursor-pointer rounded-lg py-3 text-white">
        ثبت
      </button>
    </form>
  );
};

export default AdminProductCreatePage;
