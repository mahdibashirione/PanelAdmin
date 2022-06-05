import { useState } from "react";
import { } from "react-icons/ai"


const ViewCategoryProduct = () => {

  const [category, setCategory] = useState([
    { name: "Digital", value: 126, icon: "#icon" },
    { name: "Sports", value: 150, icon: "#icon" },
    { name: "Console Game", value: 35, icon: "#icon" },
    { name: "Kitchen", value: 450, icon: "#icon" }
  ])

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
      {category.map(item => {
        return (
          <div className="cursor-pointer bg-gradient-to-br from-purple-600 to-blue-400 text-white dark:text-slate-800 dark:bg-[rgba(255,255,255,0.6)] shadow-sm dark:shadow-white relative duration-200 rounded-xl py-6 px-4 flex gap-x-2 items-center justify-start">
            <span>
              {item.icon}
            </span>
            <div className="mr-4">
              <span className="text-lg font-sans font-bold ">{item.name}</span>
              <p className="text-md font-sans">{item.value} +</p>
            </div>
          </div>
        )
      })}
    </section>
  );
}

export default ViewCategoryProduct;