import { createDomain, forward } from "effector";
import { TaskResponseDto } from "../../api/types";
import {
   getTaskDataRequest,
   patchTaskRequest,
} from "./taskPresentationService.api";
import { taskPresFormService } from "./view/TaskPresent/components/TaskPresForm/taskPresForm.model";
import { taskPresModalService } from "./view/TaskPresent/components/TaskPresModal/taskPresModal.model";

const domain = createDomain("taskPresentationService");

const taskIdTransmit = domain.event<string>();
const $taskId = domain.store("");
$taskId.on(taskIdTransmit, (_, id) => id);

const getTaskDataRequestFx = domain.effect(getTaskDataRequest);

forward({
   from: taskIdTransmit,
   to: getTaskDataRequestFx,
});

const $taskData = domain.store<TaskResponseDto>({
   _id: "",
   title: "",
   description: "",
   preview: "",
});
$taskData
   .on(getTaskDataRequestFx.doneData, (_, data) => data)
   .reset(taskPresModalService.inputs.handleClose);

export const taskPresentationService = {
   inputs: { taskIdTransmit },
   outputs: { $taskId, $taskData },
};
