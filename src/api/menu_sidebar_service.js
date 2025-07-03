import { SilentErrorHandler } from "../utils/error_handler";
import axiosInstance from "./axios_instance";

export const getMenusByRoleId = async (roleId) => {
  try {
    const response = await axiosInstance.get(
      `GetMenusByRoleId?roleId=${roleId}`
    );
    return response.data;
  } catch (error) {
    SilentErrorHandler(error, "Failed to fetch sidebar menus");
    return [];
  }
};
