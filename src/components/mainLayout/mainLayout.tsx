import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import SidebarItem from "../SidebarItem/SidebarItem";
import peopleIcon from "/assets/icon.svg";
import "./mainLayout.css";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar>
          <SidebarItem name="Employee list" icon={peopleIcon} />
        </Sidebar>
        <>{children}</>
      </div>
    </div>
  );
};

export default MainLayout;
