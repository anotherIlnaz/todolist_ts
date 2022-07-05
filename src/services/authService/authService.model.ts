import { createDomain } from 'effector';
import { welcomePageService } from '../welcomePageService/welcomePageService.model';

const domain = createDomain(
  'authService'
);

export const authService = {
  inputs: {
    setStatus: welcomePageService.inputs.setStatus,
  },
  outputs: {

  },
};
