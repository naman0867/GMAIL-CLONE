import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Inbox from './components/Inbox'
import Mail from './components/Mail' // ✅ IMPORTANT
import SendEmail from './components/SendEmail'

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
        element: <Mail /> // ✅ FIXED
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>
      }
    ]
  }
])

function App() {
  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <Navbar />
      <RouterProvider router={appRouter} />
      <div className='absolute w-[30%] bottom-0 right-20 z-10'>
        <SendEmail/>
      </div>
    </div>
  )
}

export default App