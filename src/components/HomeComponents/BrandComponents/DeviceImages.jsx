import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
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
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { Upload } from "lucide-react";
import ImageList from "./ImageList";
import PaymentDialog from "../../PaymentSignUpComponents/PaymentDialog";
import Steps from "./Steps";

const DeviceImages = ({ stepContent }) => {
  const showImage = useGeneralStore((state) => state.showImage);
  const setShowImage = useGeneralStore((state) => state.setShowImage);
  const previewImage = useGeneralStore((state) => state.previewImage);
  const setPreviewImage = useGeneralStore((state) => state.setPreviewImage);

  const imageList = useGeneralStore((state) => state.imageList);
  const setImageList = useGeneralStore((state) => state.setImageList);
  const showContent = useGeneralStore((state) => state.showContent);
  const setShowContent = useGeneralStore((state) => state.setShowContent);
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
    if (imageList.filter((file) => file.image === showImage.image).length > 0) {
      setShowImage("");
      setImageName("");
      setPreviewImage(false);
      return;
    }
    setImageList([...imageList, { image: showImage, name: imageName }]);
    setShowImage("");
    setImageName("");
    setPreviewImage(false);
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
          ? "translate-x-0 w-full md:con__height px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-32  relative poppins-regular py-12 md:py-0"
          : "translate-x-[-100%] absolute h-0"
      }`}
    >
      <div className="w-full items-center justify-center md:justify-between flex  pt-12 mb-4">
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

      <div className="mb-10">
        <div className=" ">
          <p className="mb-6">
            Upload File <span className="text-[#E40C0C]">*</span>
          </p>

          <label className="border border-dashed h-[300px] w-full flex items-center justify-center cursor-pointer border-gray-500">
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
          {/* </FileUploader> */}
        </div>
      </div>

      {/* <div className="w-full flex items-center justify-center mb-10">
        <Button
          disabled={!imageList.length === 4}
          className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1] w-1/2 py-8 text-lg rounded-xl"
          //  onClick={() => setShowContent(4)}
        >
          Continue
        </Button>
      </div> */}
      <ImageList />
      <PaymentDialog title="Next" />
      <AlertDialog
        className="w-full"
        open={previewImage}
        // onOpenChange={addToList}
      >
        <AlertDialogTrigger className="w-full"></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Image Preview</AlertDialogTitle>
            <AlertDialogDescription>
              <img src={showImage} alt="" className="" />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="w-full ">
            <AlertDialogCancel className="w-1/2" onClick={handleCancel}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="w-1/2"
              onClick={() => addToList(showImage)}
            >
              {/* <Button
                className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1]  py-2 text-lg rounded-xl w-full"
               
              >
              </Button> */}
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default DeviceImages;
