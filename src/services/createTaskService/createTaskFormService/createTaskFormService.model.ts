import { createDomain, forward } from "effector";
import { CreateTaskDto } from "../../../api/types";
import { deskService } from "../../deskService";
import { createTaskService } from "../createTaskService.model";

const domain = createDomain("createTaskFormService");

const $deskData = createTaskService.outputs.$deskData;

const handleSubmit = domain.event<CreateTaskDto>();

const reGetDesk = domain.event();

forward({
   from: handleSubmit,
   to: createTaskService.inputs.postTaskFx,
});

forward({
   from: createTaskService.inputs.postTaskFx.doneData,
   to: reGetDesk,
});


export const createTaskFormService = {
   inputs: {
      handleSubmit,
      reGetDesk,
   },
   outputs: { $deskData },
};
