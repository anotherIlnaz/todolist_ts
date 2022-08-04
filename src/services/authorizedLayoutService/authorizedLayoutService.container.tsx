import { useStore } from "effector-react";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { CreateDeskContainer } from "../createDeskService";
import { authorizedLayoutService } from "./authorizedLayoutService.model";
import { AuthorizedLayout } from "./view/AuthorizedLayout";
import { ContentWrapper } from "./view/authorizedLayout.styled";

const { gates, outputs } = authorizedLayoutService;
const { DesksGate } = gates;

export const AuthorizedLayoutContainer: FC = ({}) => {
   const desks = useStore(outputs.$desks);

   return (
      <>
         <DesksGate />
         <AuthorizedLayout desks={desks} />
         <ContentWrapper>
            <Outlet />
         </ContentWrapper>
      </>
   );
};
