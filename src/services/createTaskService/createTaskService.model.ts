import { createDomain, forward } from "effector";
import { DeskResponseDto } from "../../api/types";
import { fetchDesk } from "../deskService/deskService.api";

const domain = createDomain("createTaskService");

const addNewTask = domain.event<string>();
const getDeskDataFx = domain.effect<string, DeskResponseDto>(fetchDesk);
const $deskData = domain.store({});

forward({
   from: addNewTask,
   to: getDeskDataFx,
});

$deskData.on(getDeskDataFx.doneData, (_, data) => data);

export const createTaskService = {
   inputs: {
      addNewTask,
   },
   outputs: { $deskData },
};
