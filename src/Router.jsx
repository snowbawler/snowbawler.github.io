import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./pages/Home";
import Crags from "./pages/Crags";
import PlaceHolder from "./pages/Page2";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <Home />
        },
        {
            path: '/Crags',
            element: <Crags />
        },
        {
            path: '/PlaceHolder',
            element: <PlaceHolder />
        },
    ]);
    
    return (
        <RouterProvider router={router} />
    );
}
 
export default App;