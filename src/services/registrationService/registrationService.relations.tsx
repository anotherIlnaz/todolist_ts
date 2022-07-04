import { forward } from "effector";
import { WelcomePageStatus } from "../welcomePageService/welcomePageService.types";
import { registrationService } from "./registrationService.model";

const { inputs } = registrationService;

forward({
   from: inputs.handleRegistrationComplete,
   to: inputs.setStatus.prepend(() => WelcomePageStatus.Authentication),
});

export const RegistrationServiceRelations = () => null;
