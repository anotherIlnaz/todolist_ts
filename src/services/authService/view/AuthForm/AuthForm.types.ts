import { WelcomePageStatusTypes } from "../../../welcomePageService/welcomePageService.types";

export type AuthFormProps = {
   setStatus: (value: WelcomePageStatusTypes) => void;
};
