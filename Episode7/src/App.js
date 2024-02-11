import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import About from "./components/About";
import Error from "./components/Error";
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout=()=>{
    return(
        <div id='appContainer'>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRoute=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>,
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu/>,
            }
        ],
        errorElement:<Error/>

    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>);