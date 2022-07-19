import { FC } from "react";
import { Upload } from "react-bootstrap-icons";
import { Wrapper } from "./UploadImage.styled";
import { UploadImageProps } from "./UploadImage.types";

export const UploadImage: FC<UploadImageProps> = ({ handleChange }) => {
   return (
      <>
         <input
            id="avatarInput"
            type="file"
            accept="image/*"
            onChange={(event) =>
               event.target.files &&
               handleChange &&
               handleChange(event.target.files)
            }
            style={{ display: "none" }}
         />
         <label htmlFor="avatarInput" style={{ margin: 0, width: "100%" }}>
            <Wrapper
               onDrop={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleChange && handleChange(event.dataTransfer.files);
               }}
               onDragOver={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
               }}
            >
               <Upload size={"22px"} />
               Перенеси файл или нажми для обзора папок
            </Wrapper>
         </label>
      </>
   );
};
