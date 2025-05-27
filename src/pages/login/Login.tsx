import { Button, CheckBox } from "../../components";
import { TextInputField } from "../../components";
import kvLogo from "/assets/kv-logo.png";
import kvLoginAside from "/assets/kv-login.jpeg";
import "./Login.css";
import { useEffect, useRef, useState } from "react";
import useMousePointer from "../../hooks/useMousePointer";
import useLocalStorage from "../../hooks/useLocalStorage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    usernameError: "",
    passwordError: "",
  });
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const mousePosition = useMousePointer();
  const localStorage = useLocalStorage();
  const [isPasswordShown, setIsPasswordShown] = useState(
    Boolean(localStorage.get("showPassword"))
  );
  const logIn = () => alert("Logged in");

  useEffect(() => {
    if (username.length > 10) {
      setValidationErrors((err) => {
        return { ...err, usernameError: "Username too long" };
      });
    } else if (!username) {
      setValidationErrors((err) => {
        return { ...err, usernameError: "Username is required" };
      });
    } else {
      setValidationErrors((err) => {
        return { ...err, usernameError: "" };
      });
    }
  }, [username]);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

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
            <p>{`x: ${mousePosition.x}, y: ${mousePosition.y}`}</p>
          </div>
          <div>
            <TextInputField
              placeholder="Username"
              label="Username"
              variants="animated"
              value={username}
              ref={usernameRef}
              onChange={(e) => setUsername(e.target.value)}
              endAdornment={
                <button
                  type="button"
                  onClick={() => setUsername("")}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: username.length === 0 ? "none" : "block",
                  }}
                >
                  &times;
                </button>
              }
            />
            <p
              style={{
                marginLeft: "6px",
                color: validationErrors.usernameError ? "red" : "green",
              }}
            >
              {validationErrors.usernameError || "Valid username"}
            </p>
          </div>
          <div>
            <TextInputField
              placeholder="Password"
              label="Password"
              type={isPasswordShown ? "text" : "password"}
              variants="animated"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CheckBox
              label="Show password"
              name="show-password"
              checkedState={isPasswordShown}
              onCheckedChange={() => {
                setIsPasswordShown((oldVal) => {
                  localStorage.set("showPassword", String(!oldVal));
                  return !oldVal;
                });
              }}
            />
          </div>
          <p>
            {username &&
              `Username: ${
                username + ` ${password && `& password: ${password}`}`
              }`}
          </p>
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
