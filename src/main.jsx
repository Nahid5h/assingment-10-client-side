import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import AllTSport from './component/AllTSport.jsx';
import AddTSport from './component/AddTSport.jsx';
import MyList from './component/MyList.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivetRout from './privetRout/PrivetRout.jsx';
import ViewDetail from './component/ViewDetail.jsx';
import UpdateINformation from './component/UpdateINformation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('https://assingment-10-server-three.vercel.app/spot')
      },
      {
        path:"/allTSport",
        element:<AllTSport></AllTSport>,
        loader:()=>fetch('https://assingment-10-server-three.vercel.app/spot')
      },
      {
        path:"/addTSport",
        element:<PrivetRout><AddTSport></AddTSport></PrivetRout>
      },
      {
        path:"/myList",
        element:<PrivetRout>
          <MyList></MyList>
        </PrivetRout>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>

      },
      {
        path:'/viewDetail/:id',
        element:<PrivetRout><ViewDetail></ViewDetail></PrivetRout>,
        // loader:()=>fetch(`https://assingment-10-server-three.vercel.app/spot`)

      },
      {
        path:"/updateInformation/:id",
        element:<UpdateINformation></UpdateINformation>

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
