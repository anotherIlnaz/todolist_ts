import { createDomain, forward, sample } from "effector";
import { createGate } from "effector-react";
import { DeskResponseDto } from "../../api/types";
import { fetchDeleteDesk, fetchDesk } from "./deskService.api";

const domain = createDomain("deskService");

const $desk = domain.store<null | DeskResponseDto>(null);

const getDeskFx = domain.effect<string, DeskResponseDto>((value) =>
   fetchDesk(value)
);
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



export const deskService = {
   inputs: { deleteDesk, deleteDeskFx },
   outputs: { $desk, $isLoad },
   gates: {
      DeskIdGate,
   },
};
