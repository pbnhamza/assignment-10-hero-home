import MyLink from "../MyLink/MyLink";
import "../../../src/index.css";
import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handelTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  const handleSingOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        toast("Sign-out Unsuccessful");
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <MyLink to={"/"}>Home</MyLink>
      </li>
      <li>
        <MyLink to={"/my-service"}>My Services</MyLink>
      </li>
      <li>
        <MyLink to={"/add-service"}>Add Service</MyLink>
      </li>
      <li>
        <MyLink to={"/my-bookings"}>My Bookings</MyLink>
      </li>
    </>
  );
  return (
    <div
      style={{
        background:
          " radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, .2) 100%)",
      }}
      className="navbar text-gray-800  shadow-sm"
    >
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className=" dropdown-content rounded-box z-1 mt-3 w-42 p-2 shadow gap-1 text-white"
            style={{
              background:
                "linear-gradient(180deg,rgba(125, 107, 107, 1) 3%, rgba(140, 29, 61, 1) 97%)",
            }}
          >
            {links}
          </ul>
        </div>
        <Link to={"/"}>
          <img className=" h-10" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" px-1 gap-4 flex text-white font-semibold">{links}</ul>
      </div>
      <div className="navbar-end gap-4 ">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user
                      ? user.photoURL
                      : `https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white"
              style={{
                background:
                  "radial-gradient(circle,rgba(63, 94, 251, 0.96) 100%, rgba(252, 70, 107, 1) 100%)",
              }}
            >
              <input
                onChange={(e) => handelTheme(e.target.checked)}
                defaultChecked={localStorage.getItem("theme") === "dark"}
                type="checkbox"
                className="toggle"
              />
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <Link onClick={handleSingOut} className="btn">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to={"/login"} className="slice rounded-2xl">
              Login
            </Link>
            <Link to={"/register"} className="slice rounded-2xl ">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
