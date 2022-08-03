import { useStore } from "effector-react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { NotesPage } from "./pages/NotesPage";
import { NotFound } from "./pages/NotFound";
import { AuthorizedLayoutContainer } from "./services/authorizedLayoutService";
import { AuthContainer, authService } from "./services/authService";
import { DeskContainer } from "./services/deskService";
import { NotificationsContainer } from "./services/notificationsService";
import { UserContainer } from "./services/userService";
import { WelcomePageContainer } from "./services/welcomePageService";
import { Layout } from "./services/welcomePageService/view/Layout";

function App() {
   const isAuth = useStore(authService.outputs.$isAuth);

   return (
      <>
         <NotificationsContainer />
         <BrowserRouter>
            <Routes>
               {isAuth ? (
                  <Route element={<AuthorizedLayoutContainer/>}>
                     <Route element={<MainPage />} path="/main" />
                     <Route element={<NotesPage />} path="/notes:id" />
                     <Route element={<DeskContainer />} path="/desks/:id" />
                     <Route
                        element={<Navigate to="/main" replace />}
                        path="*"
                     />
                     <Route element={<UserContainer />} path="/userRoom" />
                  </Route>
               ) : (
                  <Route element={<Layout />}>
                     <Route path="/" element={<WelcomePageContainer />} />
                     <Route path="/auth" element={<AuthContainer />} />
                     <Route path="*" element={<Navigate to="/" />} />
                  </Route>
               )}
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
