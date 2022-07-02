import { axios } from "../../api";
import { CreateUserDto } from "../../api/types";

export const registerUser = (payload: CreateUserDto): Promise<void> =>
   axios.post("users", payload);
