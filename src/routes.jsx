import App from './App/App'
import ErrorPage from './pages/ErrorPage.jsx'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:name',
    element: <App />,
  },
]

export default routes
