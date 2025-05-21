'use client'
import React, { useState,useContext } from "react";
import FileUploader from "../components/FileUploader.jsx";
import ImageProcess from "../components/Image/ImageProcess";
import imagesToPDFHandler from "../methods/imagesToPDF.js";
import ImageDeleteButton from "../components/Image/ImagePreviewButtons/ImageDeleteButton";
import ImageRotateButtons from "../components/Image/ImagePreviewButtons/ImageRotateButtons";
import LeftSideResizeImage from "../components/Image/LeftSideBoxButtons/LeftSideResizeImage";
import LeftSideMargin from "../components/Image/LeftSideBoxButtons/LeftSideMargin";
import texts from '../../texts.json';
import {LanguageContext} from '../../Context/LanguageContext';

export default function jpgtopdf() {

    const lang = useContext(LanguageContext);

  const [images, setImages] = useState([]);
  const [marginMillimeter, setMarginMillimeter] = useState([0, 0, 0, 0]);

  const onFileChange = async (e) => {
    const temp = [];
    const images = e.target.files;

    for (var i = 0; i < images.length; i++) {
      const image = images[i];
      const imageURL = URL.createObjectURL(image);
      const imageBytes = await fetch(imageURL).then((res) => res.arrayBuffer());
      const imageData = {
        src: imageBytes,
        name: image.name,
        degrees: 0,
        deleted: false,
      };
      temp.push(imageData);
    }

    setImages(temp);
  };

  const LeftSideBoxExtra = () => {
    return (
      <>
        <button
          className="px-4 py-2 w-full bg-green-700 rounded-sm text-md mt-2"
          onClick={() => imagesToPDFHandler(images, marginMillimeter, true)}
        >
          {texts.saveasmerged[lang]}
        </button>
        <LeftSideResizeImage />
        <LeftSideMargin
          margin={marginMillimeter}
          setMargin={setMarginMillimeter}
        />
      </>
    );
  };

  const ImagePreviewExtra = ({ image, setDeleted, imageRef }) => {
    return (
      <div className="flex flex-col gap-2 items-center justify-center mt-2 mb-2">
        <ImageRotateButtons image={image} imageRef={imageRef} />
        <ImageDeleteButton image={image} setDeleted={setDeleted} />
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden">
      <div className="w-full h-[150px]"></div>
      {/* Banner */}
      <div className="bg-green-700 border-gray-600 border-t-2 border-dotted text-white flex flex-col items-center justify-center h-[30vh] w-screen">
        <div className="text-4xl font-medium leading-normal tracking-wide">
          {texts.imagestopdf[lang]}
        </div>
        <div>{texts.jpgtopdftext[lang]}</div>
      </div>

      {images.length === 0 && (
        <FileUploader
          onFileChange={onFileChange}
          fileType="image/*"
          multiple={true}
          choose={texts.choosefile[lang]}
          drops={texts.ordrop[lang]}
        />
      )}
      {images.length !== 0 && (
        <ImageProcess
          images={images}
          setImages={setImages}
          sortableImagePreviewGrid={true}
          addFileOptions={{ fileType: "image/*", multiple: true }}
          downloadHandler={() => imagesToPDFHandler(images, marginMillimeter)}
          LeftSideBoxExtra={LeftSideBoxExtra}
          ImagePreviewExtra={ImagePreviewExtra}
          dir={texts.dir[lang]}
        />
      )}
    </div>
  );
}
