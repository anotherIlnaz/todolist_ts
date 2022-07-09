import { Store } from "effector";
import { useEvent, useStore } from "effector-react";
import { useEffect, useState } from "react";
import { authService } from "./authService.model";
import { AuthForm } from "./view/AuthForm";

const { inputs, outputs } = authService;

export const AuthContainer = () => {
   const setStatus = useEvent(inputs.handleSetStatus);
   const handleLogin = useEvent(inputs.handleLogin);

   const isAuth = useStore(outputs.$isAuth);

   return (
      <>
         <AuthForm setStatus={setStatus} handleLogin={handleLogin} />
      </>
   );
};


