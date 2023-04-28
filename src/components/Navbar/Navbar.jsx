import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
      <div className="mt-10 rounded-md navbar bg-primary">
        <div className="navbar-start">
          <a className="btn text-2xl btn-ghost normal-case">Ravacai</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">
            <li className="">
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/tour'>Tour</Link>
            </li>
            <li>
              <Link to='/book'>Book</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn rounded-xl">Login</Link>
          <Link to='/register' className="mr-5 btn rounded-xl ml-2">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
