import "./sidebar.css";

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="main-layout-aside">
      <nav className="main-layout-aside-nav">{children}</nav>
    </aside>
  );
};

export default Sidebar;
