import { Box, Modal, Typography } from "@mui/material";
import { FC } from "react";
import { CreateTaskContainer } from "../../../../../../createTaskService";
import { style } from "./TaskPresModal.styled";

import { TaskPresModalProps } from "./TaskPresModal.types";

export const TaskPresModal: FC<TaskPresModalProps> = ({
   open,
   closeHandler,
}) => {
   return (
      <div>
         <Modal
            open={open}
            onClose={closeHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               
            </Box>
         </Modal>
      </div>
   );
};
