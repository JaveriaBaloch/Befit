import { NavLink } from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext'

// styles & images
import "./Sidebar.css"
// import DashboardIcon from '../assets/dashboard_icon.svg'

// The Dashboard Icon looks like a calculator so I used it as an icon instead.
// But feel free to change the icon as you see fit.

 function Sidebar() {
    const { user } = useAuthContext()

  return (
    <div className="sidebar">
      sidebar
    </div>
  )
}
export default Sidebar