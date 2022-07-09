import { useStore } from "effector-react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { NotesPage } from "./pages/NotesPage";
import { NotFound } from "./pages/NotFound";
import { AuthorizedLayoutContainer } from "./services/authorizedLayoutService";
import { AuthContainer, authService } from "./services/authService";
import { NotificationsContainer } from "./services/notificationsService";
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
                  <Route element={<AuthorizedLayoutContainer />}>
                     <Route element={<MainPage />} path="/main" />
                     <Route element={<NotesPage />} path="/notes:id" />
                     <Route
                        element={<Navigate to="/main" replace />}
                        path="*"
                     />
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
