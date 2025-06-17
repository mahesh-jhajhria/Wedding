import React from "react";
import Layout from "./components/Layout";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Review from "./components/Review";



const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/sigin",
      element:<Signin/>
    },
    {
      path:"/review",
      element:<Review/>
    },
  ]
);

const App = () => {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
};

export default App;
