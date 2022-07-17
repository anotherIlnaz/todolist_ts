import { message } from "antd";
import { useEvent } from "effector-react";
import { FC, useEffect } from "react";
import { useNetworkErrors } from "../../../hooks/useNetworkErrors";
import { uploadImageService } from "./uploadImageService.model";
import { UploadImageContainerProps } from "./uploadImageService.types";
import { UploadImage } from "./view/UploadImage";

export const UploadImageContainer: FC<UploadImageContainerProps> = ({
   handleChange,
}) => {
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

   return <UploadImage handleChange={onChange} />;
};
