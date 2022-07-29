import { FC } from "react";
import { Upload } from "react-bootstrap-icons";
import { Wrapper } from "./UploadImage.styled";
import { UploadImageProps } from "./UploadImage.types";

export const UploadImage: FC<UploadImageProps> = ({ handleChange, id}) => {
   return (
      <>
         <input
            id={id}
            type="file"
            accept="image/*"
            onChange={(event) =>
               event.target.files && handleChange(event.target.files)
            }
            style={{ display: "none" }}
         />
         <label htmlFor={id} style={{ margin: 0, width: "100%" }}>
            <Wrapper
               onDrop={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleChange(event.dataTransfer.files);
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
