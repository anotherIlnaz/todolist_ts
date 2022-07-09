import styled from "styled-components";
import { Settings } from "./Settings";

const OptionsContainer = styled.div`
   display: flex;
   align-items: center;
`;

export const Options = () => {
   return (
      <OptionsContainer>
         <Settings />
      </OptionsContainer>
   );
};
