import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi"
import { BiCategory } from "react-icons/bi"
import { AiOutlineFolderAdd } from "react-icons/ai"
import { NavLink, useLocation, Link } from "react-router-dom";

const MobileBar = () => {

  const location = useLocation()
  const [navigate, setNavigate] = useState([
    { path: '/', label: "Home", icons: "BiHomeAlt" },
    { path: '/Categories', label: "Categories", icons: "BiCategory" },
    { path: '/AddProduct', label: "AddProduct", icons: "AiOutlineFolderAdd" }
  ])

  const inLocation = navigate.find(loc => loc.path === location.pathname)

  return (
    <nav class="w-[calc(100%-1rem)] fixed bottom-2 right-2 md:hidden rounded-xl rounded-tl-lg bg-white border-2 border-zinc-800  dark:bg-zinc-900 backdrop-blur-lg dark:border-0">
      <ul class="w-full flex items-center py-2 px-4">
        <Link to="/Categories"
          class={`dark:text-white  ${inLocation.path === "/Categories" ? "bg-blue-500 dark:bg-white dark:text-zinc-900 rounded-xl text-white" : " dark:text-white"} home py-3 cursor-pointer w-full flex items-center center justify-center`}>
          <AiOutlineFolderAdd className="w-7 h-7" />
          <span class={`${inLocation.path === "/Categories" ? "flex" : "hidden"} text-sm `}>Add Product</span>
        </Link>
        <Link to="/"
          class={`dark:text-white  ${inLocation.path === "/" ? "bg-blue-500 dark:bg-white dark:text-zinc-900 rounded-xl text-white" : " dark:text-white"} categories py-3 cursor-pointer w-full flex items-center center justify-center`}>
          <BiHomeAlt className="w-7 h-7" />
          <span class={`${inLocation.path === "/" ? "flex" : "hidden"} text-sm `}>Home</span>
        </Link>
        <Link to="/AddProduct"
          class={`dark:text-white ${inLocation.path === "/AddProduct" ? "bg-blue-500 dark:bg-white dark:text-zinc-900 rounded-xl text-white" : " dark:text-white"} cartBag py-3 cursor-pointer w-full flex items-center center justify-center`}>
          <BiCategory className="w-7 h-7" />
          <span class={`${inLocation.path === "/AddProduct" ? "flex" : "hidden"} text-sm `}>Category</span>
        </Link>
      </ul>
    </nav >
  );
}

export default MobileBar;