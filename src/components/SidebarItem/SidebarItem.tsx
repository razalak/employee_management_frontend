import "./SidebarItem.css";

type SidebarItemType = {
  name: string;
  icon: string;
};

const SidebarItem = ({ name, icon }: SidebarItemType) => {
  return (
    <a className="nav-item" href="#">
      <img className="nav-item-icon" src={icon} alt="employee list icon" />
      <p>{name}</p>
    </a>
  );
};

export default SidebarItem;
