import { Button } from "../../components";
import { TextInputField } from "../../components";
import kvLogo from "../../assets/kv-logo.png";
import kvLoginAside from "../../assets/kv-login.jpeg";
import "./Login.css";

const Login = () => {
  const logIn = () => alert("Logged in");

  return (
    <div className="login-content">
      <aside className="login-aside">
        <img
          className="circle-img"
          src={kvLoginAside}
          alt="stock image for login"
        />
      </aside>

      <main className="login-main">
        <div className="login-form-content">
          <div className="logo-div">
            <a href="#">
              <img className="logo" src={kvLogo} alt="logo" />
            </a>
          </div>
          <TextInputField
            placeholder="Username"
            label="Username"
            variants="animated"
          />
          <TextInputField
            placeholder="Password"
            label="Password"
            variants="animated"
          />
          <Button
            label="Log In"
            onClick={logIn}
            variants="default full-width"
          />
        </div>
      </main>
    </div>
  );
};

export default Login;
