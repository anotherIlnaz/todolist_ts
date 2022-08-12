import { createDomain, forward } from "effector";
import { PatchTaskPayload } from "../../../../taskPresentation.types";
import {
   deleteTaskRequest,
   patchTaskRequest,
} from "../../../../taskPresentationService.api";

const domain = createDomain("taskPresFormService");

const patchTask = domain.event<PatchTaskPayload>();
const patchTaskFx = domain.effect(patchTaskRequest);
forward({
   from: patchTask,
   to: patchTaskFx,
});

const deleteTaskFx = domain.effect(deleteTaskRequest);
const deleteTask = domain.event<string>();
forward({
   from: deleteTask,
   to: deleteTaskFx,
});

export const taskPresFormService = {
   inputs: {
      patchTask,
      deleteTask,
      deleteTaskFx,
      patchTaskFx
   },
   outputs: {},
};
