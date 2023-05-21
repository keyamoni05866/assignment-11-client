import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/ErrorPage/Error";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/Alltoys/AllToys";
import AddToys from "../pages/AddToys/AddToys";
import SingleToy from "../pages/SingleToy/SingleToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Update from "../pages/MyToys/Update";

const router = createBrowserRouter([
  {
        path: '*',
        element: <Error></Error>
  },
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path:'allToys',
          element: <AllToys></AllToys>,
          loader: () => fetch('https://assignment-11-server-kohl.vercel.app/addToys')
        },
        {
          path: 'allToys/:id',
          element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-11-server-kohl.vercel.app/addToys/${params.id}`)
        },
        {
        path: 'myToy',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'updateToy/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`https://assignment-11-server-kohl.vercel.app/myToys/${params.id}`)
        },
        {
          path: 'addToy',
          element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        }
      ]
    },
  ]);
  

  export default router