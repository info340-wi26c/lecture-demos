import { Link } from "react-router";

function PageNotFound() {
  return (
    <>
      <h1>PAGE DOESN'T EXIST</h1>
      <p>Did you mean to go <Link to="/">home</Link>?</p>
    </>
  )
}

export default PageNotFound;