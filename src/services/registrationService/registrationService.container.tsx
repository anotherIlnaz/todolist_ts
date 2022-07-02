import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registrationService } from "./registrationService.model";
import { RegistrationForm } from "./view/RegistrationForm";

const { inputs, outputs } = registrationService;

export const RegistrationContainer = () => {
   const navigate = useNavigate();

   const handleRegisterUser = useEvent(inputs.handleRegisterUser);
   const isLoading = useStore(outputs.$isLoading);

   useEffect(
      () =>
         inputs.handleRegistrationComplete.watch(() => navigate("/auth"))
            .unsubscribe,
      []
   );

   return (
      <RegistrationForm
         handleRegisterUser={handleRegisterUser}
         isLoading={isLoading}
      />
   );
};
