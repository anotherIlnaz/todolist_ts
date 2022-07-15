import { createDomain, forward } from "effector";
import { UserResponseDto } from "../../api/types";
import { getUser } from "./userService.api";

const domain = createDomain("userService");

const $userResponse = domain.createStore<UserResponseDto | null>(null);
const getUserFx = domain.createEffect(getUser);
const loadUser = domain.createEvent();

forward({
   from: loadUser,
   to: getUserFx,
});

$userResponse.on(getUserFx.doneData, (_, userData) => userData);



export const userService = {
   inputs: { loadUser },
   outputs: { $userResponse },
};
