import {
  createBrowserRouter 
} from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>
      }
    ]
  },
]);