import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './page/Root.jsx';
import Error from './page/Error.jsx';
import Home from './page/Home.jsx';
import Create from './page/Create.jsx';
import All from './page/All.jsx';
import My from './page/My.jsx';
import Login from './page/Login.jsx';
import Register from './page/Register.jsx';
import AuthPro from './components/AuthPro.jsx';
import Submited from './page/Submited.jsx';
import Privet from './components/Privet.jsx';
import Update from './components/Update.jsx';
import View from './components/View.jsx';
import Dynamic from './components/Dynamic.jsx';
import Mark from './components/Mark.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('./fake.json')
      },
      {
        path:'/create',
        element:<Privet><Create></Create></Privet>
      },
      {
        path:'/all',
        element:<privet><All></All></privet>,
        loader: ()=> fetch('http://localhost:3000/my')
      },
      {
        path:'/my',
        element:<privet><My></My></privet>
      },


      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/submited',
        element:<Privet><Submited></Submited></Privet>,
        loader:()=>fetch('http://localhost:3000/submits?stutas=pending')
      },
      {
        path:'/update/:id',
        element:<privet><Update></Update></privet>,
        loader: ({params})=>fetch(`http://localhost:3000/my/${params.id}`)
      },
      {
        path:'/view/:id',
        element:<privet><View></View></privet>,
        loader: ({params})=>fetch(`http://localhost:3000/my/${params.id}`)
      },
      {
        path:'/dynamic/:id',
        element:<privet><Dynamic></Dynamic></privet>,
        loader: ({params})=>fetch(`http://localhost:3000/my/${params.id}`)
      },
      {
        path:'/mark/:id',
        element:<privet><Mark></Mark></privet>,
        loader: ({params})=> fetch(`http://localhost:3000/submits/${params.id}`)
      },
    ]

  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthPro>
  <RouterProvider router={router} />
  </AuthPro>
  </React.StrictMode>,
)
