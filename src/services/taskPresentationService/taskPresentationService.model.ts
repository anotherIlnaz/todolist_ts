import { createDomain, forward } from "effector";
import {
   getTaskDataRequest,
   patchTaskRequest,
} from "./taskPresentationService.api";
import { taskPresFormService } from "./view/TaskPresent/components/TaskPresForm/taskPresForm.model";

const domain = createDomain("taskPresentationService");

const patchTaskRequestFx = domain.effect(patchTaskRequest);

const handleSubmit = taskPresFormService.inputs.handleSubmit;

const taskIdTransmit = domain.event<string>();
const $taskId = domain.store("");
$taskId.on(taskIdTransmit, (_, id) => id);

forward({
   from: handleSubmit,
   to: patchTaskRequestFx,
});

const getTaskDataRequestFx = domain.effect(getTaskDataRequest);

forward({
   from: taskIdTransmit,
   to: getTaskDataRequestFx,
});

export const taskPresentationService = {
   inputs: { taskIdTransmit },
   outputs: { $taskId },
};
