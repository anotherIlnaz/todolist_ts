import { createDomain, forward, sample } from "effector";
import { createGate } from "effector-react";
import { DeskResponseDto } from "../../api/types";
import { fetchDesk } from "./deskService.api";

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

sample({
   clock: DeskIdGate.state,
   fn: (clocksTransmit) => clocksTransmit.deskID,
   target: getDeskFx,
});

export const deskService = {
   inputs: {},
   outputs: { $desk, $isLoad },
   gates: {
      DeskIdGate,
   },
};
