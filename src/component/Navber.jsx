import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSingOut = (e) => {
    logOut().then().catch();
  };
  const nabLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#2ecc71] text-xl font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allTSport"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#2ecc71] text-xl font-semibold"
              : ""
          }
        >
          All Tourists Sport
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addTSport"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#2ecc71] text-xl font-semibold"
              : ""
          }
        >
          Add Tourists Sports
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myList"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#2ecc71] text-xl font-semibold"
              : ""
          }
        >
          My List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nabLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl text-purple-400  ">
          TravelNestle.com
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nabLink}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="flex items-center">
            <div className="tooltip" data-tip={user?.displayName || 'user name not found'}>
            <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL ||"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  
                  } />
                </div>
              </div>
            </div>
            <a
              onClick={handleSingOut}
              className="btn bg-[#f39c12] text-xl rounded-full text-white"
            >
              Logout
            </a>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <a className="btn bg-[#f39c12] text-xl rounded-full text-white">
                Login
              </a>
            </Link>
            <Link to="/register">
              <a className="btn  bg-[#f39c12] text-xl rounded-full text-white">
                Register
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
