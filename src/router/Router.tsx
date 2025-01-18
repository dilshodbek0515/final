import { useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Sale from '../pages/sale/Sale'
import Arrivals from '../pages/arrivals/Arrivals'
import Brend from '../pages/brend/Brend'
import Error from '../pages/error/Error'
import Cart from '../pages/cart/Cart'
import Search from '../pages/search/Search'
import Profil from '../pages/profil/Profil'

const Router = () => {
  return (
    <div>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '/',
              element: <Home />
            },
            {
              path: '/sale',
              element: <Sale />
            },
            {
              path: '/arrivals',
              element: <Arrivals />
            },
            {
              path: 'brend',
              element: <Brend />
            },
            {
              path: 'cart',
              element: <Cart />
            },
            {
              path: 'search',
              element: <Search />
            },
            {
              path: 'profil',
              element: <Profil />
            }
          ]
        },
        {
          path: '*',
          element: <Error />
        }
      ])}
    </div>
  )
}

export default Router
