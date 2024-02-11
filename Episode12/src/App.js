import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Help from "./components/Help";
import Error from "./components/Error";
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import {Provider} from 'react-redux';
import store from "./utils/store";

const Cart=lazy(()=>import("./components/Cart"));

const AppLayout=()=>{
    return(
        <Provider store={store}>
            <div className="w-full">
                <Header/>
                <Outlet/>
            </div>
        </Provider>
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
                path:'/support',
                element:<Help/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu/>,
            },
            {
                path:'/cart',
                element:<Suspense fallback={<Shimmer/>}><Cart/></Suspense>,
            }
        ],
        errorElement:<Error/>

    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>);