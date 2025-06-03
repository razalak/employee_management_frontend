import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import SidebarItem from "../SidebarItem/SidebarItem";
import peopleIcon from "/assets/icon.svg";
import "./mainLayout.css";
import { Outlet} from "react-router-dom";
import { Navigate } from "react-router-dom";


const MainLayout = () => {
if(!localStorage.getItem("token")){
  return <Navigate to="/login"/>
}
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar>
          <SidebarItem name="Employee list" icon={peopleIcon} />
        </Sidebar>
       <div className="outlet"> <><Outlet/></></div>
      </div>
    </div>
  );
};

export default MainLayout;
