import { Outlet } from "react-router-dom";
import { AuthorizedLayout } from "./view/AuthorizedLayout";

export const AuthorizedLayoutContainer = () => {
   return (
      <>
         <AuthorizedLayout />
         <Outlet />
      </>
   );
};
