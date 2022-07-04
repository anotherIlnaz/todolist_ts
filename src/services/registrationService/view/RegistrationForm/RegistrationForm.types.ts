import { CreateUserDto } from "../../../../api/types";
import { WelcomePageStatus } from "../../../welcomePageService/welcomePageService.types";

export type RegistrationFormProps = {
   handleRegisterUser: (payload: CreateUserDto) => void;
   isLoading: boolean;
   setStatus: (value: WelcomePageStatus) => void
};
