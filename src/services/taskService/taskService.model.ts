import { createDomain } from "effector";
import { deskService } from "../deskService";

const { inputs, outputs } = deskService;

const deskData = outputs.$desk;

const domain = createDomain("taskService");

export const taskService = {
   inputs: {},
   outputs: {
      deskData,
   },
};
