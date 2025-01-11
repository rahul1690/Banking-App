import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Login from './components/Authentication/Login'
import { useContext } from 'react'
import Home from './components/Dashboard/Home'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <Home />
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
