import { useStore } from "effector-react";
import { WelcomePage } from "./view/WelcomePage";
import { welcomePageService } from "./welcomePageService.model";

const { outputs } = welcomePageService;

export const WelcomePageContainer = () => {
   const welcomePageStatus = useStore(outputs.$welcomePageStatus);

   return <WelcomePage welcomePageStatus={welcomePageStatus} />;
};
