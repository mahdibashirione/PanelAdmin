import { useState } from "react";
import { } from "react-icons/ai"


const ViewCategoryProduct = () => {

  const [category, setCategory] = useState([
    { name: "Digital", value: 126, color: "bg-rose-500", icon: "#icon" },
    { name: "Sports", value: 150, color: "bg-lime-500", icon: "#icon" },
    { name: "Console Game", value: 35, color: "bg-purple-500", icon: "#icon" },
    { name: "Kitchen", value: 450, color: "bg-yellow-500", icon: "#icon" }
  ])

  return (
    <section className="w-full grid grid-cols-1 bg- md:grid-cols-2 lg:grid-cols-4 gap-2 ">
      {category.map(item => {
        return (
          <div className={`${item.color} cursor-pointer hover:translate-y-2 relative duration-200 rounded-xl py-6 px-4 flex gap-x-2 items-center justify-start`}>
            <span>
              {item.icon}
            </span>
            <div>
              <span className="text-md font-sans">{item.name}</span>
              <p className="text-md font-sans">{item.value} +</p>
            </div>
          </div>
        )
      })}

    </section>
  );
}

export default ViewCategoryProduct;