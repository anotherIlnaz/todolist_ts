import { AxiosResponse } from "axios";
import { axios } from "../../../api";
import { AvatarPayload } from "./uploadImageService.types";

export const setAvatarRequest = async ({
   image,
   type,
}: AvatarPayload): Promise<string> => {
   const res: { filename: string } = await axios.post(
      "/files/image",
      { image, type },
      {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      }
   );

   return res.filename;
};
