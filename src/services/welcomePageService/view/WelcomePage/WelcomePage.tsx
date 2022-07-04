import { FC, useState } from "react";
import { RegistrationContainer } from "../../../registrationService";
import { StyledVaz2114, Wrapper } from "./WelcomePage.styled";
import { WelcomePageProps } from "./WelcomePage.types";
import vaz2114 from "../../../../assets/vaz-2114.png";
import { AuthContainer } from "../../../authService";
import { WelcomePageStatus } from "../../welcomePageService.types";

export const WelcomePage: FC<WelcomePageProps> = ({ welcomePageStatus }) => {
   return (
      <Wrapper>
         {welcomePageStatus === WelcomePageStatus.Registration ? (
            <RegistrationContainer />
         ) : (
            <AuthContainer />
         )}
         <StyledVaz2114 src={vaz2114} />
      </Wrapper>
   );
};
