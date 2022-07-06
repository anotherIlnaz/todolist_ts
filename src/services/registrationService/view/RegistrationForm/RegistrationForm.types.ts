import { CreateUserDto } from "../../../../api/types";
import { WelcomePageStatusTypes } from "../../../welcomePageService/welcomePageService.types";

export type RegistrationFormProps = {
   handleRegisterUser: (payload: CreateUserDto) => void;
   isLoading: boolean;
   setStatus: (value: WelcomePageStatusTypes) => void;
};
