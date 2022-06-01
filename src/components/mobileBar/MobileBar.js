import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi"
import { BiCategory } from "react-icons/bi"
import { AiOutlineFolderAdd } from "react-icons/ai"
import { NavLink, useLocation, Link } from "react-router-dom";

const MobileBar = () => {

  const location = useLocation()
  const [navigate, setNavigate] = useState([
    { path: '/', label: "Home" },
    { path: '/Categories', label: "Categories" },
    { path: '/AddProduct', label: "AddProduct" }
  ])

  const inLocation = navigate.find(loc => loc.path === location.pathname)

  return (
    <nav class="w-full fixed bottom-0 right-0 md:hidden rounded-tr-lg rounded-tl-lg bg-gray-200">
      <ul class="w-full flex items-center py-2 px-4">
        <Link to="/Categories"
          class={`${inLocation.path === "/Categories" ? "bg-blue-500 rounded-full text-white" : ""} home py-3 cursor-pointer w-full flex items-center center justify-center duration-400 ease-in transition-all`}>
          <AiOutlineFolderAdd className="w-7 h-7" />
          <span class={`${inLocation.path === "/Categories" ? "flex" : "hidden"} text-sm `}>Add Product</span>
        </Link>
        <Link to="/"
          class={`${inLocation.path === "/" ? "bg-blue-500 rounded-full text-white" : ""} categories py-3 cursor-pointer w-full flex items-center center justify-center duration-400 ease-in transition-all`}>
          <BiHomeAlt className="w-7 h-7" />
          <span class={`${inLocation.path === "/" ? "flex" : "hidden"} text-sm `}>Home</span>
        </Link>
        <Link to="/AddProduct"
          class={`${inLocation.path === "/AddProduct" ? "bg-blue-500 rounded-full text-white" : ""} cartBag py-3 cursor-pointer w-full flex items-center center justify-center duration-400 ease-in transition-all`}>
          <BiCategory className="w-7 h-7" />
          <span class={`${inLocation.path === "/AddProduct" ? "flex" : "hidden"} text-sm `}>Category</span>
        </Link>
      </ul>
    </nav >
  );
}

export default MobileBar;