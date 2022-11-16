import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Login from './components/Login';
import Waiter from './components/Waiter';
import Kitchen from './components/Kitchen';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element:<Login/>,
        children:[
            {
                path: "waiter",
                element: <Waiter />,
              },
              {
                path: "kitchen",
                element: <Kitchen />,
              },
        ]
    }
])

root.render( 
    <RouterProvider
    router= {router}
    fallbackElement={ <Login />}
  />
    
   );
      
/* ReactDOM.render(
   // <React.StrictMode>
    <Login />,
    // </React.StrictMode>,
    document.getElementById('root')
) */





