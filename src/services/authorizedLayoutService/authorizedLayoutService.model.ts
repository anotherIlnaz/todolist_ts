import { createDomain, forward } from "effector";
import { createGate } from "effector-react";
import { DesksListResponseDto, DeskTinyResponseDto } from "../../api/types";
import { createDeskService } from "../createDeskService";
import { deskService } from "../deskService";
import { getDesks } from "./authotizedLayoutService.api";

const domain = createDomain("authorizedLayoutService");

const $desks = domain.store<DeskTinyResponseDto[]>([]);

const getDesksFx = domain.effect<void, DesksListResponseDto>(getDesks);

$desks.on(getDesksFx.doneData, (_, desks) => desks.items);

const DesksGate = createGate();

const refetchDesks = domain.event<void>();

forward({
   from: deskService.inputs.deleteDeskFx.doneData,
   to: refetchDesks,
});

forward({
   from: createDeskService.inputs.createDeskFx.doneData,
   to: refetchDesks,
});

forward({
   from: refetchDesks,
   to: getDesksFx,
});

forward({
   from: DesksGate.open,
   to: getDesksFx,
});

export const authorizedLayoutService = {
   inputs: {},
   outputs: { $desks },
   gates: {
      DesksGate,
   },
};
