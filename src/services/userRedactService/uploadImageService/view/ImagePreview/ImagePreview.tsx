import { FC } from "react";
import { ButtonSC, Image } from "./ImagePreview.styled";
import { ImagePreviewProps } from "./ImagePreview.types";

export const ImagePreview: FC<ImagePreviewProps> = ({ src, handleDelete }) => {
   return (
      <>
         <Image src={src} />
         <ButtonSC onClick={handleDelete}>Удалить фотку</ButtonSC>
      </>
   );
};
