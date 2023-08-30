import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
      <div className="ErrorPage">
          <h1>404 Not Found 🦧</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>Back to <Link to={'/'}>Home</Link></p>
    </div>
  )
}
export default ErrorPage