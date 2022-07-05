import { useEvent } from "effector-react";
import { registrationService } from "../registrationService";
import { AuthForm } from "./view/AuthForm";

export const AuthContainer = () => {

   const setStatus = useEvent(registrationService.inputs.setStatus);


   return (
      <>
         <AuthForm setStatus={setStatus} />
      </>
   );
};
