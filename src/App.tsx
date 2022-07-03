import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { NotesPage } from "./pages/NotesPage";
import { NotFound } from "./pages/NotFound";
import { AuthContainer } from "./services/authService";
import { NotificationsContainer } from "./services/notificationsService";
import { Layout } from "./services/welcomePageService/view/Layout";
import { WelcomePage } from "./services/welcomePageService/view/WelcomePage";

const isAuth = false;

function App() {
   return (
      <>
         <NotificationsContainer />
         <BrowserRouter>
            <Routes>
               {isAuth ? (
                  <>
                     <Route element={<MainPage />} path="/main" />
                     <Route element={<NotesPage />} path="/notes:id" />
                     <Route element={<NotFound />} path="*" />
                  </>
               ) : (
                  <Route element={<Layout />}>
                     <Route path="/" element={<WelcomePage />} />
                     {/* <Route path="/" element={<WelcomePage />} /> */}
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
