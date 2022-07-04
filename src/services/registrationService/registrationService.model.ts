import { createDomain, forward } from "effector";
import { CreateUserDto } from "../../api/types";
import { welcomePageService } from "../welcomePageService/welcomePageService.model";
import { registerUser } from "./registrationService.api";

const domain = createDomain("registrationService");

const registerUserFx = domain.createEffect<CreateUserDto, void>(registerUser);

const handleRegisterUser = domain.createEvent<CreateUserDto>();

forward({
   from: handleRegisterUser,
   to: registerUserFx,
});

const $isLoading = registerUserFx.pending;

const handleRegistrationComplete = registerUserFx.doneData;

export const registrationService = {
   inputs: {
      handleRegisterUser,
      handleRegistrationComplete,
      setStatus: welcomePageService.inputs.setStatus,
   },
   outputs: { $isLoading },
};
