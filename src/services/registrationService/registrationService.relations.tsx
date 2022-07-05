import { forward } from "effector";
import { WelcomePageStatusTypes } from "../welcomePageService/welcomePageService.types";
import { registrationService } from "./registrationService.model";

const { inputs } = registrationService;

forward({
   from: inputs.handleRegistrationComplete,
   to: inputs.setStatus.prepend(() => WelcomePageStatusTypes.Authentication),
});

export const RegistrationServiceRelations = () => null;
