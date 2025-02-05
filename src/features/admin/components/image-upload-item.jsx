const ImageUpload = ({ image, index, onImageUpdate, onImageRemove }) => {
  return (
    <div className="group relative size-40 overflow-hidden rounded-2xl bg-gray-300 hover:backdrop-opacity-50">
      <div className="size-full">
        <img src={image["data_url"]} alt="" className="size-full object-cover" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-gray-700/80 opacity-0 transition group-hover:opacity-100">
        <button
          onClick={() => onImageUpdate(index)}
          className="w-20 cursor-pointer rounded bg-amber-500 py-1 text-white"
        >
          آپدیت
        </button>
        <button onClick={() => onImageRemove(index)} className="w-20 cursor-pointer rounded bg-red-500 py-1 text-white">
          حذف
        </button>
      </div>
    </div>
  );
};
export default ImageUpload;
