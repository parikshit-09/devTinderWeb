import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const [menuOpen, setMenuOpen] = useState(false); // Controls mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // Controls dropdown visibility
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeUser = () => {
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center p-3">
        {/* Logo and Branding */}
        <div className="flex items-center">
          <img className="w-10 rounded-full" src="./cb.jpeg" alt="dev logo" />
          <p className="mx-2 font-bold">DevTinder</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded bg-slate-500 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>

        {/* Navbar Links */}
        <ul
          className={`flex flex-col md:flex-row items-center md:static absolute top-16 left-0 w-full bg-slate-300 md:bg-transparent md:w-auto transition-all ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="mx-3 p-2">Home</li>
          <li className="mx-3 p-2">Interested</li>
          <li
            className="mx-3 p-2 relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {!user ? (
              "Sign-in"
            ) : (
              <>
                Welcome {user?.firstName || "Guest"}
                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded w-40">
                    <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer">
                      Settings
                    </li>
                    <li
                      onClick={removeUser}
                      className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
