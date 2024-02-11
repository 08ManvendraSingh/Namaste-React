import { useRouteError } from "react-router-dom"

const Error = () => {

  const error=useRouteError(); 

  return (
    <div className="w-full px-28 py-8 relative top-20">
        <h2>{error.status}: {error.statusText}</h2>
    </div>
  )
}

export default Error