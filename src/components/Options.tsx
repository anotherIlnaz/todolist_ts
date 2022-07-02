
import styled from "styled-components";

import { ModeSwitcher } from "./ModeSwitcher";
import { Settings } from "./Settings";

const OptionsContainer = styled.div`
   display: flex;
   align-items: center;
   
`;

export const Options = () => {
   return (
      <OptionsContainer>
         <ModeSwitcher />
         <Settings />
      </OptionsContainer>
   );
};
