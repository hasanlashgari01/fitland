import { NavLink } from "react-router";

const MenuLink = ({ path, text, children }) => {
  return (
    <li>
      <NavLink to={path} className={children ? "flex gap-1 items-center" : ""}>
        {children}
        <span>{text}</span>
      </NavLink>
    </li>
  );
};

export default MenuLink;
