import { createDomain, forward } from "effector";
import { DeskResponseDto } from "../../api/types";
import { fetchDesk } from "../deskService/deskService.api";
import { fetchCreateTask } from "./createTaskService.api";

const domain = createDomain("createTaskService");

const addNewTask = domain.event<string>();
const getDeskDataFx = domain.effect<string, DeskResponseDto>(fetchDesk);
const $deskData = domain.store<DeskResponseDto | null>(null);

const postTaskFx = domain.effect(fetchCreateTask);

// forward({
//    from: postTaskFx.doneData,
//    to:addNewTask ,
// })

forward({
   from: addNewTask,
   to: getDeskDataFx,
});



$deskData.on(getDeskDataFx.doneData, (_, data) => data);

export const createTaskService = {
   inputs: {
      addNewTask,postTaskFx
   },
   outputs: { $deskData },
};
