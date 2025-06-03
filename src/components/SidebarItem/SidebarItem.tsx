import { Link, useNavigate } from "react-router-dom";
import "./SidebarItem.css";

type SidebarItemType = {
  name: string;
  icon: string;
};

const SidebarItem = ({ name, icon }: SidebarItemType) => {
  const navigate=useNavigate();
  return (
    <>
    <Link className="nav-item" to="/employee">
      <img className="nav-item-icon" src={icon} alt="employee list icon" />
      <p>{name}</p>
    </Link>
     <button className="logout-button" onClick={()=>{localStorage.setItem("token",""); navigate("/login")}}>
      <img className="nav-item-icon" src={icon} alt="employee list icon" />
      <p>Logout</p>
    </button>
    </>
  );
};

export default SidebarItem;
