import { useEvent, useStore } from "effector-react";
import { registrationService } from "./registrationService.model";
import { RegistrationServiceRelations } from "./registrationService.relations";
import { RegistrationForm } from "./view/RegistrationForm";

const { inputs, outputs } = registrationService;

export const RegistrationContainer = () => {
   const handleRegisterUser = useEvent(inputs.handleRegisterUser);

   const setStatus = useEvent(registrationService.inputs.setStatus);

   const isLoading = useStore(outputs.$isLoading);

   // useEffect(
   //    () =>
   //       inputs.handleRegistrationComplete.watch(() => navigate("/auth"))
   //          .unsubscribe,
   //    []
   // );

   return (
      <>
         <RegistrationServiceRelations />
         <RegistrationForm
            setStatus={setStatus}
            handleRegisterUser={handleRegisterUser}
            isLoading={isLoading}
         />
      </>
   );
};
