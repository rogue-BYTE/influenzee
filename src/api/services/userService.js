import axiosInstance from "../api/axiosInstance";

export const userService = {
  login: async (email, password) => {
    const response = await axiosInstance.post("/auth/login", { email, password });
    return response.data;
  },

  getProfile: async () => {
    const response = await axiosInstance.get("/user/profile");
    return response.data;
  },

  logout: async () => {
    localStorage.removeItem("token");
  },
};
