import { createDomain, forward } from "effector";
import { setAvatarRequest } from "./uploadImageService.api";
import { AvatarPayload, SetAvatarPayload } from "./uploadImageService.types";

const domain = createDomain("uploadImageService");

const setAvatar = domain.createEvent<AvatarPayload>();
const setAvatarFx = domain.createEffect<AvatarPayload, string>(
   setAvatarRequest
);

forward({
   from: setAvatar,
   to: setAvatarFx,
});

const setAvatarFailed = setAvatarFx.failData;
const setAvatarSuccess = setAvatarFx.doneData;

export const uploadImageService = {
   inputs: {
      setAvatar,
      setAvatarFx,
   },
   outputs: { setAvatarFailed, setAvatarSuccess },
};
