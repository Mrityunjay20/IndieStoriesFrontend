import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import ErrorPage from './Layout/Error'
import Rootlayout from './Layout/RootLayout'
import ConnectPage from './Pages/Connect'
import HomePage from './Pages/HomePage'
import OurImpactPage from './Pages/OurImpact'
import OurStoryPage from './Pages/OurStori'
import Shop from './Pages/Shop'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Rootlayout/>,
      error:<ErrorPage/>,
      children:[{
        index:true,
        element:<HomePage/>
      },
      {
        path:'/ourstori',
        element:<OurStoryPage/>
      },
      {
        path:'/ourimpact',
        element:<OurImpactPage/>
      },
      {
        path:'/connect',
        element:<ConnectPage/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
