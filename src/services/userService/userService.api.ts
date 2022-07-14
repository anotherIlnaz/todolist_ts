import { axios } from "../../api";
import { UserResponseDto } from "../../api/types";

export const getUser = (): Promise<UserResponseDto> => {
   return axios.get("users/me");
};
