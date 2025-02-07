import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div>
      <h1>Sorry, an unexpected error has occurred!</h1>
      <p><i>{error.statusText || error.message}</i></p>
      <Link to='/'>Take me to the home page.</Link>
    </div>
  )
}

export default ErrorPage
