import { forward, sample } from "effector";
// import { userRedactService } from "./userRedactService.model";

// userRedactService.outputs.$me
//    .on(userRedactService.inputs.getUserFx.doneData, (_, me) => me)
//    .on(userRedactService.inputs.setAvatarFx.doneData, (user, patchedUser) => ({
//       ...user,
//       avatar: patchedUser.avatar,
//    }));

// forward({
//    from: userRedactService.inputs.GetUserGate.open,
//    to: userRedactService.inputs.getUserFx,
// });

// sample({
//    source: userRedactService.outputs.$me,
//    clock: userService.inputs.setAvatar,
//    fn: (sourceData, clockData) => ({ data: clockData, user: sourceData }),
//    target: userService.inputs.setAvatarFx,
// });
