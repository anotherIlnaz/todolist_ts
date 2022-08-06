import { axios } from "../../api";
import { DesksListResponseDto } from "../../api/types";

export const getDesks = (): Promise<DesksListResponseDto> => axios.get("desks");
