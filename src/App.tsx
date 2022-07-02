import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { AuthPage } from "./pages/AuthPage";
import { MainPage } from "./pages/MainPage";
import { NotesPage } from "./pages/NotesPage";
import { NotFound } from "./pages/NotFound";

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
               <Route element={<AuthPage />} path="/" />
            )}
         </Routes>
      </BrowserRouter>
   );
}

export default App;
