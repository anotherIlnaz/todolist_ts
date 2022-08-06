import { useStore } from "effector-react";
import { createTaskService } from "./createTaskService.model";

const { inputs, outputs } = createTaskService;

export const CreateTaskContainer = () => {
   const deskData = useStore(outputs.$deskData);

   console.log(deskData);

   return <></>
};
