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



export const taskPresFormService = {
   inputs: {
      handleSubmit,
      reGetDesk,
   },
   outputs: { $deskData },
};
