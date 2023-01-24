import { Post } from "../../lib/requests";

export const normalSignupAction = (payload) => {
  return async () => {
    const result = await Post("/user/signup", payload);
    return result;
  };
};
