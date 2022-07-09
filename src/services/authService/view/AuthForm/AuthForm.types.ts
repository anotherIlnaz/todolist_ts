import { SignInDto } from "../../../../api/types";
import { WelcomePageStatusTypes } from "../../../welcomePageService/welcomePageService.types";

export type AuthFormProps = {
   setStatus: (value: WelcomePageStatusTypes) => void;
   handleLogin: (payload: SignInDto) => SignInDto;
};
