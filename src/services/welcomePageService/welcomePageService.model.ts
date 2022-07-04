import { createDomain, forward } from "effector";
import { WelcomePageStatus } from "./welcomePageService.types";

const domain = createDomain("welcomePageService");

const $welcomePageStatus = domain.createStore(WelcomePageStatus.Registration);

const setStatus = domain.createEvent<WelcomePageStatus>();

forward({ from: setStatus, to: $welcomePageStatus });

export const welcomePageService = {
   inputs: { setStatus },
   outputs: { $welcomePageStatus },
};
