import { createDomain, forward } from "effector";
import { createTaskService } from "../../../../../createTaskService";
import { PatchTaskPayload } from "../../../../taskPresentation.types";

interface PatchTaskDto {
   title: string;
   description: string;
   preview: string;
}

const domain = createDomain("taskPresFormService");

const $deskData = createTaskService.outputs.$deskData;

const handleSubmit = domain.event<PatchTaskPayload>();

const reGetDesk = domain.event();



// forward({
//    from: createTaskService.inputs.postTaskFx.doneData,
//    to: reGetDesk,
// });

export const createTaskFormService = {
   inputs: {
      handleSubmit,
      reGetDesk,
   },
   outputs: { $deskData },
};
