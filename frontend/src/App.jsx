import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Inbox from './components/Inbox'
import Mail from './components/Mail'
import SendEmail from './components/SendEmail'
import Login from './components/Login'   // ✅ add this
import Signup from './components/Signup' // ✅ add this
import {Toaster} from 'react-hot-toast';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        index: true,
        element: <Inbox />
      },
      {
        path: "email/:id",
        element: <Mail />
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>
      }
    ]
  }, // ✅ FIX: comma added here

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
])

function App() {
  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <Navbar />
      <RouterProvider router={appRouter} />
      
      <div className='absolute w-[30%] bottom-0 right-20 z-10'>
        <SendEmail />
      </div>
      <Toaster/>
    </div>
  )
}

export default App
