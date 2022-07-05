import { createDomain, forward } from "effector";
import { WelcomePageStatusTypes } from "./welcomePageService.types";

const domain = createDomain("welcomePageService");

const $welcomePageStatus = domain.createStore(WelcomePageStatusTypes.Registration);

const setStatus = domain.createEvent<WelcomePageStatusTypes>();

forward({ from: setStatus, to: $welcomePageStatus });

export const welcomePageService = {
   inputs: { setStatus },
   outputs: { $welcomePageStatus },
};
