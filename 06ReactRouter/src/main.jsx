import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Github from './Components/Github/Github'
import { githubDataLoad } from './Components/Github/Github'
import UseParamUser from './Components/UseParamUser/UseParamUser'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"github",
        element:<Github/>,
        loader:githubDataLoad
      },
      {
        path:"user/:userid",
        element:<UseParamUser/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
