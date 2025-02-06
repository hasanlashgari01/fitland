import { HiArrowUpTray, HiTrash } from "react-icons/hi2";
import ImageUploading from "react-images-uploading";
import ImageUpload from "./image-upload-item";

const ImageUploadList = ({ images, setImages }) => {
  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <ImageUploading multiple value={images} onChange={onChange} maxNumber={6} dataURLKey="data_url">
      {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, dragProps }) => (
        <div className="mt-5 flex min-h-48 w-3xl gap-14 border border-dashed p-3">
          <div className="flex flex-col gap-3">
            <button
              className="flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-white"
              onClick={onImageUpload}
              {...dragProps}
            >
              <HiArrowUpTray size={20} />
              <span>افزودن عکس</span>
            </button>
            <button
              className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white"
              onClick={onImageRemoveAll}
            >
              <HiTrash size={20} />
              <span>حذف همه</span>
            </button>
          </div>
          <div className="grid w-fit grid-cols-3 gap-2">
            {imageList.map((image, index) => (
              <ImageUpload
                key={index}
                index={index}
                image={image}
                onImageUpdate={onImageUpdate}
                onImageRemove={onImageRemove}
              />
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploadList;
