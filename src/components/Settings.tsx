import { Drawer, Popconfirm } from "antd";
import { useEvent } from "effector-react";
import { useState } from "react";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../services/authService";

const StyledSettignsButton = styled.div`
   border: none;
   user-select: none;
   cursor: pointer;
   color: var(--colors-ui-apple);
   font-size: 24px;
   display: flex;
   align-items: center;
`;

const StyledOut = styled.div`
   padding: 15px;
   font-size: 16px;
   font-weight: 400;
   border: 1px solid red;
   border-radius: 15px;
   display: flex;
   justify-content: center;
`;

const StyledUserRoom = styled.div`
margin-top: 10px;
   padding: 15px;
   font-size: 16px;
   font-weight: 400;
   border: 1px solid blue;
   border-radius: 15px;
   display: flex;
   justify-content: center;
`


export const Settings = () => {
   const navigate = useNavigate()
   const [visible, setVisible] = useState(false);

   const Logout = useEvent(authService.inputs.handleLogout);

   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };
   return (
      <>
         <StyledSettignsButton onClick={showDrawer}>
            <IoEllipsisHorizontalCircleOutline />
         </StyledSettignsButton>
         <Drawer
            title="Меню"
            placement="right"
            onClose={onClose}
            visible={visible}
         >
            <Popconfirm
               title="Точно разлогиниться?"
               onConfirm={Logout}
               okText="Да"
               cancelText="Нет"
            >
               <StyledOut>Отрегаться</StyledOut>
            </Popconfirm>
            <StyledUserRoom
            onClick={ () => navigate("/userRoom") }
            >Комната юзера</StyledUserRoom>
         </Drawer>{" "}
      </>
   );
};
