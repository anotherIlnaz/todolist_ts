import { axios } from "../../api";
import { SignInDto, SignInResponseDto } from "../../api/types";

export const authPost = (payload: SignInDto): Promise<SignInResponseDto> =>
   axios.post("auth/login", payload);
