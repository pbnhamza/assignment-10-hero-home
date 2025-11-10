import { NavLink } from "react-router";

const MyLink = ({ className, to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "font-bold border-b-2  " : `${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
