import { Upload } from "lucide-react";
import { Button } from "../../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";
import { useGeneralStore } from "../../../store/generalStore";

import ImageList from "./ImageList";
import Steps from "./Steps";

const DeviceImages = ({ stepContent }) => {
  const showImage = useGeneralStore((state) => state.showImage);
  const setShowImage = useGeneralStore((state) => state.setShowImage);
  const previewImage = useGeneralStore((state) => state.previewImage);
  const setPreviewImage = useGeneralStore((state) => state.setPreviewImage);

  const imageList = useGeneralStore((state) => state.imageList);
  const setImageList = useGeneralStore((state) => state.setImageList);
  const imageName = useGeneralStore((state) => state.imageName);
  const setImageName = useGeneralStore((state) => state.setImageName);
  const urlList = useGeneralStore((state) => state.urlList);
  const setUrlList = useGeneralStore((state) => state.setUrlList);

  const handleChange = (e) => {
    if (imageList.length === 4) return;
    setImageName(e.target.files[0].name);
    const tempUrl = URL.createObjectURL(e.target.files[0]);
    setUrlList([...urlList, tempUrl]);
    setShowImage(tempUrl);

    if (showImage) {
      setPreviewImage(true);
    }
  };

  const addToList = (showImage) => {
    if (imageList.filter((file) => file.image === showImage[0]).length > 0) {
      setShowImage("");
      setImageName("");
      setPreviewImage(false);

      return;
    } else {
      setImageList([...imageList, { image: showImage, name: imageName }]);
      setShowImage("");
      setImageName("");
      setPreviewImage(false);
    }
  };
  const handleCancel = () => {
    setShowImage("");
    setImageName("");
    setPreviewImage(false);
  };
  return (
    <section
      className={` ${
        stepContent === 5
          ? "translate-x-0 w-full md:con__height px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-32  relative poppins-regular "
          : "translate-x-[-100%] absolute h-0"
      }`}
    >
      <div className="w-full items-center justify-center md:justify-between flex mb-4">
        <h1 className="poppins-semibold text-xl xs:text-3xl">Phone Images</h1>
        <Button
          variant="link"
          className="hidden md:block underline text-[#0E0C4D] text-lg"
        >
          <a href="#how-it-works">How it works</a>
        </Button>
      </div>
      <p className="text-[#111111] text-center md:text-left xs:text-lg md:text-base mb-12">
        Please upload 2 to 4 clear images of your smartphone
      </p>
      <Steps step={5} />

      <div className="">
        <p className="mb-6">
          Upload File <span className="text-[#E40C0C]">*</span>
        </p>

        <label className="border border-dashed h-[300px] w-full flex items-center justify-center cursor-pointer border-gray-400">
          <div className="flex flex-col justify-center items-center gap-4">
            <Upload className="h-12 w-12 text-[#979797]" />
            <p className="text-[#979797]">
              Drag and drop files here or choose file
            </p>
            <input
              type="file"
              className="invisible"
              accept="image/*"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </label>
      </div>

      <ImageList />
      <AlertDialog className="w-full" open={previewImage}>
        <AlertDialogTrigger className="w-full"></AlertDialogTrigger>
        <AlertDialogContent className="w-[80%] md:w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Image Preview</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex items-center justify-center">
                <img
                  src={showImage}
                  alt=""
                  className="h-[200px] w-[250px] md:w-auto md:h-auto"
                />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="w-full ">
            <AlertDialogCancel className="sm:w-1/2" onClick={handleCancel}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="sm:w-1/2"
              onClick={() => addToList(showImage)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default DeviceImages;
