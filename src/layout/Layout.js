import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row container min-h-screen">
      <div className=""></div>
      <Navbar />
      <div className="w-full bg-red-200 p-4 h-[1000px] mt-[100px] md:mt-0">
        {children}
      </div>
    </div>
  );
}

export default Layout;