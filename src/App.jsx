import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import ErrorPage from './Layout/Error'
import Rootlayout from './Layout/RootLayout'
import HomePage from './Pages/HomePage'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Rootlayout/>,
      error:<ErrorPage/>,
      children:[{
        index:true,
        element:<HomePage/>

      }]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
