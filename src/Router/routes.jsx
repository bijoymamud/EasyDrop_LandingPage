import Main from "@/Layout/Main";
import Home from "@/Pages/Home/Home/Home";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[{
        path: "/",
        element: <Home/>
      }]
    },
  ]);