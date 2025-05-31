import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Home from './component/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       }, 
//       {
//         path: "about",
//         element: <About/>
//       },
//        {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} /> 
      <Route path="/user/:userid" element={<User />} /> 
       <Route
       loader={githubInfoLoader}
        path="github"
         element={<Github />}
          /> 
    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


