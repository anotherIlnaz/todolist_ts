import { useEvent, useStore } from "effector-react";
import { registrationService } from "./registrationService.model";
import { RegistrationForm } from "./view/RegistrationForm";

const { inputs, outputs } = registrationService;

export const RegistrationContainer = () => {
   const handleRegisterUser = useEvent(inputs.handleRegisterUser);
   const isLoading = useStore(outputs.$isLoading);

   return (
      <RegistrationForm
         handleRegisterUser={handleRegisterUser}
         isLoading={isLoading}
      />
   );
};
