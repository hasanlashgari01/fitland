import { useEffect, useState } from "react";

const ProductPageImage = ({ data, isLoading }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    !isLoading && setImage(data.cover);
  }, [isLoading]);

  return (
    <div className="flex flex-col justify-center gap-10 overflow-hidden sm:flex-row-reverse lg:flex-col">
      <div className="xs:size-87.5 h-72 max-sm:mx-auto">
        <img
          src={`http://localhost:3000/public/images/${image}`}
          alt=""
          className="h-full rounded-2xl border border-gray-200 object-cover"
        />
      </div>

      {data.images.length > 0 && (
        <div className="flex gap-3 max-sm:mt-3.75 sm:flex-col lg:flex-row">
          {data.images.map((image) => (
            <div key={image} className="cursor-pointer">
              <img
                src={`http://localhost:3000/public/images/${image}`}
                alt=""
                className="size-20 rounded-2xl border border-gray-200 object-cover p-2"
                onClick={() => setImage(image)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPageImage;
