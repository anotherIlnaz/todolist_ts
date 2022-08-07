import { createDomain, forward } from "effector";
import { CreateTaskDto } from "../../../api/types";
import { createTaskService } from "../createTaskService.model";

const domain = createDomain("createTaskFormService");

const $deskData = createTaskService.outputs.$deskData;

const handleSubmit = domain.event<CreateTaskDto>();

forward({
   from: handleSubmit,
   to: createTaskService.inputs.postTaskFx,
});

export const createTaskFormService = {
   inputs: {
      handleSubmit,
   },
   outputs: { $deskData },
};
