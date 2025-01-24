import React from "react";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="bg-slate-300 flex justify-between items-center">
        <div className="flex m-3 p-3 items-center">
          <img className="w-10 rounded-full " src="./cb.jpeg" alt="dev logo" />
          <p className="mx-2 font-bold">DevTinder</p>
        </div>
        <div className="m-3 p-3">
          <ul className="flex">
            <li className="mx-3">Home</li>
            <li className="mx-3">Intrested</li>
            <li className="mx-3">Sign-in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
