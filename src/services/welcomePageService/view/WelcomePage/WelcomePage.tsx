import { FC } from "react";
import { RegistrationContainer } from "../../../registrationService";
import { StyledVaz2114, Wrapper } from "./WelcomePage.styled";
import { WelcomePageProps } from "./WelcomePage.types";
import vaz2114 from "../../../../assets/vaz-2114.png";

export const WelcomePage: FC<WelcomePageProps> = ({}) => {
   return (
      <Wrapper >
         <RegistrationContainer />
         <StyledVaz2114 src={vaz2114} />
      </Wrapper>
   );
};
