import { apiService } from "../common/axios";

export const getNewCamera = async () => {
  return await apiService.get("/bot/camera-new");
};

export const getExistCamera = async () => {
  return await apiService.get("/bot/camera-exist");
};
