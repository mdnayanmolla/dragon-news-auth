import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Resigter from "../pages/Register/Resigter";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home> ,
                loader:() => fetch('/news.json')
            },
            {
                 path:'/news/:id',
                 element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Resigter></Resigter>
            }
        ]
    }
]);
export default routes;