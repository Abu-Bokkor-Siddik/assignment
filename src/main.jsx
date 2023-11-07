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
        element:<Privet><All></All></Privet>,
        // loader: ()=> fetch('http://localhost:3000/my')
      },
      {
        path:'/my',
        element:<Privet><My></My></Privet>
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
        element:<Privet><Update></Update></Privet>,
        loader: ({params})=>fetch(`http://localhost:3000/my/${params.id}`)
      },
      {
        path:'/view/:id',
        element:<Privet><View></View></Privet>,
        loader: ({params})=>fetch(`http://localhost:3000/my/${params.id}`)
      },
      {
        path:'/dynamic/:id',
        element:<Privet><Dynamic></Dynamic></Privet>,
        loader: ({params})=>fetch(`http://localhost:3000/my/${params.id}`)
      },
      {
        path:'/mark/:id',
        element:<Privet><Mark></Mark></Privet>,
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
