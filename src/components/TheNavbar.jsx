import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const TheNavbar = () => {
  const location = useLocation();
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (location.pathname === "/user") {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [location.pathname]);

  return (
    <nav className="flex justify-between items-center px-5 lg:px-10 xl:px-12 py-5">
      <div>
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:flex relative">
        <IoMdSearch className="absolute left-3 top-2.5 text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search for your favorite groups in ATG"
          className="outline-none w-96 bg-gray-100 pl-9 px-3 py-2 rounded-full focus:ring-1 focus:ring-gray-500"
        />
      </div>
      <div className="hidden lg:flex items-center">
        {user ? (
          <div className="flex items-center">
            <img src="/person4.png" alt="person4" className="w-9 h-9 mr-2" />
            <h1 className="text-sm">Siddharth Goyal</h1>
          </div>
        ) : (
          <>
            <h1 className="font-semibold">
              Create account. <span className="text-blue-500 ">It’s free!</span>
            </h1>
          </>
        )}

        <MdArrowDropDown className="text-xl hover:cursor-pointer" />
      </div>
    </nav>
  );
};
export default TheNavbar;
