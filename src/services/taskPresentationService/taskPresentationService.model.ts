import { createDomain, forward } from "effector";
import { createTaskFormService } from "../createTaskService/createTaskFormService";
import { patchTaskRequest } from "./taskPresentationService.api";

const domain = createDomain("taskPresentationService");

const patchTaskRequestFx = domain.effect(patchTaskRequest)

const handleSubmit =  createTaskFormService.inputs.handleSubmit
forward({
   from:handleSubmit,
   to:patchTaskRequestFx
})

export const taskPresentationService = {
   inputs: {},
   outputs: {},
};
