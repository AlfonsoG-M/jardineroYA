
import { Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <h1>este es el navbar</h1>
        <ul>
          <li>contacto</li>
          <li>jardineros</li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Navbar