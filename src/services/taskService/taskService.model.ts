import { createDomain, forward, sample } from "effector";
import { ReplaceTaskRequestPayloadDto } from "../../api/types";
import { deskService } from "../deskService";
import { ReplaceTaskRequest } from "./taskService.api";

const { inputs, outputs } = deskService;
const deskData = outputs.$desk;

const domain = createDomain("taskService");

const replaceTaskFx = domain.effect(ReplaceTaskRequest);
const moveTask = domain.event<ReplaceTaskRequestPayloadDto>();
forward({
   from: moveTask,
   to: replaceTaskFx,
});

sample({
   clock: replaceTaskFx.doneData,
   source: deskService.gates.DeskIdGate.state,
   fn: (clocksTransmit) => clocksTransmit.deskID,
   target: deskService.inputs.getDeskFx,
});

export const taskService = {
   inputs: { moveTask, replaceTaskFx },
   outputs: {
      deskData,
   },
};
