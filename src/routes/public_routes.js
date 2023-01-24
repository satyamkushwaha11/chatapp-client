import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Upload from "../pages/upload";

const publicRoutes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/upload",
    name: "upload",
    component: Upload,
  },
];


export default publicRoutes;
