import { BiHomeAlt } from "react-icons/bi"
import { BiCategory } from "react-icons/bi"
import { BiUser } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"
import { AiOutlineFolderAdd } from "react-icons/ai"
import { useState } from "react"
import { useLocation, NavLink } from "react-router-dom"
import MobileBar from "../mobileBar/MobileBar";

const Navbar = () => {

  const location = useLocation()
  const [navigate, setNavigate] = useState([
    { path: '/', label: "Home" },
    { path: '/Categories', label: "Categories" },
    { path: '/AddProduct', label: "AddProduct" }
  ])

  const inLocation = navigate.find(loc => loc.path === location.pathname)

  return (
    <header className="md:mx-2 z-30">
      <nav className="md:h-[calc(100vh-1rem)] md:rounded-lg md:sticky md:top-2 md:w-auto md:px-4 md:py-4 md:w-50px md:flex-col fixed top-0 right-0 w-full flex justify-between items-center py-4 px-2 bg-blue-500 dark:bg-zinc-900 border-2 border-blue-600 dark:border-zinc-600 text-white">
        <div className=" flex items-center justify-start md:flex-col">
          <BiUser className="text-2xl w-10 h-10 p-2 rounded-md hover:bg-[rgba(255,255,255,0.2)] cursor-pointer" />
        </div>
        <ul className="hidden md:flex items-center justify-start md:flex-col gap-y-4">
          <NavLink to="/AddProduct"><AiOutlineFolderAdd className={`${inLocation.path === "/AddProduct" ? "text-zinc-900 bg-slate-100" : "hover:bg-[rgba(255,255,255,0.2)]"} cursor-pointer text-2xl w-10 h-10 p-2 rounded-md`} /></NavLink>
          <NavLink to="/"><BiHomeAlt className={`${inLocation.path === "/" ? "text-zinc-900 bg-slate-100" : "hover:bg-[rgba(255,255,255,0.2)]"} cursor-pointer text-2xl w-10 h-10 p-2 rounded-md`} /></NavLink>
          <NavLink to="/Categories"><BiCategory className={`${inLocation.path === "/Categories" ? "text-zinc-900 bg-slate-100" : "hover:bg-[rgba(255,255,255,0.2)]"} cursor-pointer text-2xl w-10 h-10 p-2 rounded-md`} /></NavLink>
        </ul>
        <span className="md:hidden text-lg select-none">Panel</span>
        <div className=" flex items-center justify-end md:flex-col">
          <BiLogOut className="text-2xl w-10 h-10 p-2 rounded-md hover:bg-[rgba(255,255,255,0.2)] cursor-pointer" />
        </div>
      </nav>
      <MobileBar />
    </header >
  );
}

export default Navbar;