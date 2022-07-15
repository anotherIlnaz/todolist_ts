import { axios } from "../../api";
import { PatchUserDto } from "../../api/types";

export const userRedactPost = (payload: PatchUserDto): Promise<void> =>
   axios.post("users", payload);
