import { createDomain, forward } from "effector";
import { createGate } from "effector-react";
import { DesksListResponseDto, DeskTinyResponseDto } from "../../api/types";
import { getDesks } from "./authotizedLayoutService.api";

const domain = createDomain("authorizedLayoutService");

const $desks = domain.store<DeskTinyResponseDto[]>([]);

const getDesksFx = domain.effect<void, DesksListResponseDto>(getDesks);

$desks.on(getDesksFx.doneData, (_, desks) => desks.items);

const DesksGate = createGate();

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
