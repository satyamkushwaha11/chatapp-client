import { Post, PostWithAddToken, PostWithToken } from "../../lib/requests";

export const normalLoginAction = (payload) => {
  return async () => {
    const result = await Post("/user/login", payload);
    return result;
  };
};

export const loginWithGoogleAct = async (token) => {
  // return dispach( async()=>{
  const result = await PostWithAddToken("/login/with/google", token);
  return result;
  // })
};
export const loginWithFacebookAct = async (token) => {
  // return dispach( async()=>{
  const result = await PostWithAddToken("/login/with/facebook", token);
  return result;
  // })
};

export const loginWithOTPAct = (payload) => {
  return async (dispatch) => {
    const result = await Post("/login/with/phonenumber", payload);
    // console.log(result, "oooooooo");
    return result;
  };
};

// export const signUpWithGoogleAct=async(payload)=>{
//     // return dispach( async()=>{
//          const result =await Post('/signup',payload)
//          console.log(result,'oooooooo');
//          return result
//     // })
// }
