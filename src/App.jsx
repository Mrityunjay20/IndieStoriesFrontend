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
import SingleProduct from './Pages/SingleProduct'
import AdminDashboard from './Pages/AdminDashboard'
import LoginPage from './Pages/UserPages/LoginPage'
import SignupPage from './Pages/UserPages/SignupPage'
import UserDashboard from './Pages/UserPages/UserDashboard'
import CheckoutPage from './Pages/UserPages/CheckoutPage'
import ShoppingCartDialog from './Components/GlobalComponents/ShoppingCartDialog'

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
        element:<Shop/>,
      },
      {
        path:'/shop/:id',
        element:<SingleProduct/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/signup',
        element:<SignupPage/>
      },
      {
        path:'/userdashboard',
        element:<UserDashboard/>
      },
      {
        path:'/admindashboard',
        element:<AdminDashboard/>
      },
      {
        path:"/checkout",
        element:<CheckoutPage />
      },
      {
        path:"/cart",
        element:<ShoppingCartDialog/>
      }]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
