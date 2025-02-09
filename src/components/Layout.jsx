import { NavLink, Outlet } from "react-router";
import NavBar from "./NavBar";
import { navRoute } from "../routes/Routes";

const Layout = () => {
  return (
    <main className="bg-white  dark:bg-dark min-h-screen smooth-transition text-dark dark:text-light ">
      <nav className="border-b fixed top-0 left-0 right-0 bg-white dark:bg-dark  smooth-transition border-gray-300 dark:border-white/20 py-3">
        <NavBar />
      </nav>
      <div className="flex items-center  h-screen pt-14">
        <div className="bg-white scroll-smooth smooth-transition hidden md:block dark:bg-dark h-full p-6 w-64 flex-shrink-0 space-y-8 text-sm  overflow-y-scroll ">
          {navRoute.map((allLink, index) => (
            <div key={index}>
              <h2 className="font-mono uppercase mb-4 text-gray-500 text-xs dark:text-gray-400 font-light smooth-transition">
                {allLink.title}
              </h2>
              <ul className=" border-l smooth-transition border-gray-300 dark:border-white/20">
                {allLink.subLink.map((sub, subIndex) => (
                  <NavLink
                    key={subIndex}
                    to={sub.path}
                    className={({ isActive }) =>
                      `py-1  block -ml-[1px] border-l-2 hover hover:text-blue-500 hover:border-blue-500 ${
                        isActive ? "text-blue-500 font-bold border-blue-500" : "text-gray-500 border-transparent"
                      }`
                    }
                  >
                    <span className="pl-5">{sub.link}</span>
                  </NavLink>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full scroll-smooth smooth-transition bg-white dark:bg-dark px-10 pt-6 h-full overflow-y-scroll pb-14 ">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
