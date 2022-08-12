import { createDomain, forward, guard, sample } from "effector";
import { createGate } from "effector-react";
import { DeskResponseDto } from "../../api/types";
import { createTaskFormService } from "../createTaskService/createTaskFormService";
import { taskPresFormService } from "../taskPresentationService/view/TaskPresent/components/TaskPresForm/taskPresForm.model";
import { fetchDeleteDesk, fetchDesk } from "./deskService.api";

const domain = createDomain("deskService");

const $desk = domain.store<null | DeskResponseDto>(null);

const getDeskFx = domain.effect<string, DeskResponseDto>((value) =>
   fetchDesk(value)
);

const getDeskHandle = domain.event<string>();

$desk.on(getDeskFx.doneData, (_, desk) => desk);

const $isLoad = getDeskFx.pending;

const DeskIdGate = createGate<{
   deskID: string;
}>();

const deleteDesk = domain.event<string>();
const deleteDeskFx = domain.effect<string, void>(fetchDeleteDesk);

forward({
   from: deleteDesk,
   to: deleteDeskFx,
});

sample({
   clock: DeskIdGate.state,
   fn: (clocksTransmit) => clocksTransmit.deskID,
   target: getDeskFx,
});

sample({
   clock: createTaskFormService.inputs.reGetDesk,
   source: DeskIdGate.state,
   fn: (clocksTransmit) => clocksTransmit.deskID,
   target: getDeskFx,
});

forward({
   from: getDeskHandle,
   to: getDeskFx,
});
sample({
   clock: taskPresFormService.inputs.deleteTaskFx.doneData,
   source: DeskIdGate.state,
   fn: (clocksTransmit) => clocksTransmit.deskID,
   target: getDeskFx,
});
sample({
   clock: taskPresFormService.inputs.patchTaskFx.doneData,
   source: DeskIdGate.state,
   fn: (clocksTransmit) => clocksTransmit.deskID,
   target: getDeskFx,
});

export const deskService = {
   inputs: { deleteDesk, deleteDeskFx, getDeskFx, getDeskHandle },
   outputs: { $desk, $isLoad },
   gates: {
      DeskIdGate,
   },
};
