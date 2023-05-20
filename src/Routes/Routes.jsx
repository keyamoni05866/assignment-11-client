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
          loader: () => fetch('http://localhost:5000/addToys')
        },
        {
          path: 'allToys/:id',
          element: <SingleToy></SingleToy>,
          loader: ({params}) => fetch(`http://localhost:5000/addToys/${params.id}`)
        },
        {
          path: 'addToy',
          element: <AddToys></AddToys>
        }
      ]
    },
  ]);
  

  export default router