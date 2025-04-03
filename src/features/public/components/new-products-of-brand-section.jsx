import Button from "./button";
import NewOfBrandItem from "./new-of-brand-item";

const NewProductsOfBrandSection = ({ title, href }) => {
  return (
    <section className="container my-8 md:my-20 lg:my-24">
      <div className="flex flex-wrap gap-4 md:gap-6">
        <NewOfBrandItem brand="puma" brandPersian="پوما" />
        <NewOfBrandItem brand="nike" brandPersian="نایک" />
        <NewOfBrandItem brand="jordan" brandPersian="جردن" />
        <div className="flex basis-77.25 flex-col justify-end max-lg:hidden">
          <h3 className="text-secondary-900 mb-2.5 text-2xl/loose font-bold">{title} محصولات</h3>
          <p className="mb-6 leading-relaxed text-neutral-600">
            {title} محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان درب منزل تحویل بگیرید
          </p>
          <Button href={href ?? "/"} className="w-full text-center" />
        </div>
      </div>
    </section>
  );
};

export default NewProductsOfBrandSection;
