import { axios } from "../../api";
import { CreateTaskDto } from "../../api/types";

export const fetchCreateTask = (payload:CreateTaskDto) => {
  return axios.post("tasks", payload);
};

