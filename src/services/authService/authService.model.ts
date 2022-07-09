import { createDomain, forward, Store } from "effector";
import { SignInDto, SignInResponseDto } from "../../api/types";
import { welcomePageService } from "../welcomePageService/welcomePageService.model";
import { authPost } from "./authService.api";

const domain = createDomain("authService");

const $isAuth = domain.createStore(false);

const loginFx = domain.createEffect<SignInDto, SignInResponseDto, Error>(
   authPost
);

const handleLogin = domain.createEvent<SignInDto>();
const handleLogout = domain.createEvent();

const setIsAuth = domain.createEvent<boolean>();

$isAuth.on(setIsAuth, (_, isAuth) => isAuth);

forward({
   from: handleLogin,
   to: loginFx,
});

forward({
   from: loginFx.doneData,
   to: setIsAuth.prepend(() => true),
});

forward({
   from: handleLogout,
   to: setIsAuth.prepend(() => false),
});

loginFx.doneData.watch(({ access, refresh }) => {
   localStorage.setItem("access", access);
   localStorage.setItem("refresh", refresh);
});

handleLogout.watch(() => {
   localStorage.clear();
});

const access = localStorage.getItem("access");
const refresh = localStorage.getItem("refresh");

if (access && refresh) setIsAuth(true);

export const authService = {
   inputs: {
      handleSetStatus: welcomePageService.inputs.setStatus,
      handleLogin,
      handleLogout,
   },
   outputs: { $isAuth },
};
