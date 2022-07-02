import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSwitcher = styled.button`
   border: none;
   background-color: var(----colors-bg);
   color: var(--colors-ui-apple);
   font-size: 22px;
`;

export const ModeSwitcher = () => {
   const [theme, setTheme] = useState("Light");

   const themeToggle = () =>
      setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));

   useEffect(() => {
      document.body.setAttribute("data-theme", theme);
   }, [theme]);

   return (
      <StyledSwitcher onClick={themeToggle}>
         {theme === "Light" ? <IoMoon /> : <IoMoonOutline />}

         <span style={{ padding: "1rem" }}>{theme} Theme</span>
      </StyledSwitcher>
   );
};
