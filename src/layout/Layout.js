import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <section className="flex flex-col md:flex-row container min-h-screen">
      <Navbar />
      <div className="w-full py-2 px-4 h-[1000px] dark:bg-zinc-700">
        {children}
      </div>
    </section>
  );
}

export default Layout;