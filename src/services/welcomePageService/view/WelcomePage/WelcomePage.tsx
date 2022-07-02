import React, { FC } from "react";
import { RegistrationContainer } from "../../../registrationService";
import { Wrapper } from "./WelcomePage.styled";
import { WelcomePageProps } from "./WelcomePage.types";

export const WelcomePage: FC<WelcomePageProps> = ({}) => {
   return (
      <Wrapper>
         <RegistrationContainer />
      </Wrapper>
   );
};
