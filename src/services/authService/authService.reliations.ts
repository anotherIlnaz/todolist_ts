import { forward } from "effector";
import { registrationService } from "../registrationService";
import { WelcomePageStatusTypes } from "../welcomePageService/welcomePageService.types";

const inputs = registrationService.inputs;

forward({
   from: inputs.handleRegistrationComplete,
   to: inputs.setStatus.prepend(() => WelcomePageStatusTypes.Registration),
});

export const AuthServiceReliations = () => null;
