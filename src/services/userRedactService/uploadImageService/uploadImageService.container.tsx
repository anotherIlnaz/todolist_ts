import { message } from "antd";
import { useEvent } from "effector-react";
import { FC, useEffect, useState } from "react";
import { useNetworkErrors } from "../../../hooks/useNetworkErrors";
import { getImageLink } from "../../../utils";
import { uploadImageService } from "./uploadImageService.model";
import { UploadImageContainerProps } from "./uploadImageService.types";
import { ImagePreview } from "./view/ImagePreview";
import { UploadImage } from "./view/UploadImage";

export const UploadImageContainer: FC<UploadImageContainerProps> = ({
   handleChange,
   image: imageValue,
   id,
}) => {
   const [image, setImage] = useState<string | null>(null);

   useEffect(() => {
      if (imageValue) setImage(imageValue);
   }, [imageValue]);

   const handleUpload = useEvent(uploadImageService.inputs.setAvatar);

   const setAvatarFailed = uploadImageService.outputs.setAvatarFailed;
   const setAvatarSuccess = uploadImageService.outputs.setAvatarSuccess;

   const onChange = (files: FileList) => {
      const img = files[0];

      if (!img) return;

      handleUpload({ image: img, type: img.type });
   };

   useEffect(
      () =>
         setAvatarSuccess.watch(() => {
            message.success("Avatar has been successfully changed");
         }),
      []
   );

   useEffect(() => {
      return setAvatarSuccess.watch((imageSrc) => {
         handleChange(imageSrc);
      }).unsubscribe;
   }, [handleChange]);

   useNetworkErrors(setAvatarFailed);

   return image ? (
      <ImagePreview
         src={getImageLink(image)}
         handleDelete={() => setImage(null)}
      />
   ) : (
      <UploadImage handleChange={onChange} id={id} />
   );
};
