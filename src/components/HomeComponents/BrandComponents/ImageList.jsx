import { Button } from "../../ui/button";
import { useGeneralStore } from "../../../store/generalStore";

const ImageList = () => {
  const showImage = useGeneralStore((state) => state.showImage);
  const setShowImage = useGeneralStore((state) => state.setShowImage);
  const previewImage = useGeneralStore((state) => state.previewImage);
  const setPreviewImage = useGeneralStore((state) => state.setPreviewImage);
  const imageList = useGeneralStore((state) => state.imageList);
  const setImageList = useGeneralStore((state) => state.setImageList);
  const urlList = useGeneralStore((state) => state.urlList);
  const setUrlList = useGeneralStore((state) => state.setUrlList);

  const removeImage = (name) => {
    const newList = imageList.filter((file) => file.name !== name);
    setImageList(newList);
  };
  const previewImg = (image) => {
    const url = urlList.filter((file) => file === image);
    setShowImage(url);

    setPreviewImage(true);
  };
  return (
    <section className="w-full my-4">
      {imageList.length > 0 &&
        imageList.map((file) => (
          <div
            className="flex  md:items-center justify-between border p-3 px-4 rounded-xl gap-4 flex-col md:flex-row mb-4"
            key={file.name}
          >
            <div className="flex items-center gap-4 ">
              <img src={file.image} alt="" className="w-[100px] h-[80px]" />
              <p className="text-sm text-wrap">{file.name}</p>
            </div>
            <div className="flex gap-2 w-full">
              <Button
                className="bg-[#0E0C4D] hover:bg-[#0E0C4D] text-white hover:text-white flex-1 sm:flex-auto"
                onClick={() => previewImg(file.image)}
              >
                Preview
              </Button>
              <Button
                className="bg-[#810707] hover:bg-[#810707] text-white hover:text-white flex-1 sm:flex-auto"
                onClick={() => removeImage(file.name)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ImageList;
