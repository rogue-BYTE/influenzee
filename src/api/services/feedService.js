import axiosInstance from "../api/axiosInstance";

export const feedService = {
  getFeeds: async () => {
    const response = await axiosInstance.get("/feeds");
    return response.data;
  },

  likePost: async (postId) => {
    const response = await axiosInstance.post(`/feeds/${postId}/like`);
    return response.data;
  },

  createPost: async (content) => {
    const response = await axiosInstance.post("/feeds", { content });
    return response.data;
  },
};
