import { FC } from "react";
import { StyledLink, Wrapper } from "./Header.styled";
import { HeaderProps } from "./Header.types";

export const Header: FC<HeaderProps> = ({}) => {
   return (
      <Wrapper>
         <StyledLink to="/">Zametkalar.tat</StyledLink>
      </Wrapper>
   );
};
