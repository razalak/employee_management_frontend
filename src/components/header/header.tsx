import kvLogo from "../../assets/kv-logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="site-header">
      <a className="header-item" href="#">
        <img className="site-logo" src={kvLogo} alt="Logo" />
      </a>
    </header>
  );
};

export default Header;
