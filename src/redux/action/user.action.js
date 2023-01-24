import { PostWithAddToken } from "../../lib/requests";
import { getLocalStorage } from "../../lib/session";



export const getUserProfile = () => {
  if (typeof window.localStorage !== "undefined") {
    const token = getLocalStorage("token");
  }
  return async () => {
    const result = await PostWithAddToken("/user", token);
    broweseCategories(result);
    return;
  };
};
