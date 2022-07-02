import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { NotesPage } from "./pages/NotesPage";
import { NotFound } from "./pages/NotFound";
import { WelcomePage } from "./services/welcomePageService/view/WelcomePage";

const isAuth = false;

function App() {
   return (
      <BrowserRouter> 
         <Routes>
            {isAuth ? (
               <>
                  <Route element={<MainPage />} path="/main" />
                  <Route element={<NotesPage />} path="/notes:id" />
                  <Route element={<NotFound />} path="*" />
               </>
            ) : (
               <Route element={<WelcomePage />} path="/" />
            )}
         </Routes>
      </BrowserRouter>
   );
}

export default App;
