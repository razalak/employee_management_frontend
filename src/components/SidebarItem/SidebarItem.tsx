import { Link } from "react-router-dom";
import "./SidebarItem.css";

type SidebarItemType = {
  name: string;
  icon: string;
};

const SidebarItem = ({ name, icon }: SidebarItemType) => {
  return (
    <Link className="nav-item" to="/employee/listing">
      <img className="nav-item-icon" src={icon} alt="employee list icon" />
      <p>{name}</p>
    </Link>
  );
};

export default SidebarItem;
