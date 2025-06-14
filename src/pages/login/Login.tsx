import { Button, CheckBox } from "../../components";
import { TextInputField } from "../../components";
import kvLogo from "/assets/kv-logo.png";
import kvLoginAside from "/assets/kv-login.jpeg";
import "./Login.css";
import { useEffect, useRef, useState } from "react";
// import useMousePointer from "../../hooks/useMousePointer";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Navigate, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api-service/auth/login.api";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("")
  const [validationErrors, setValidationErrors] = useState({
    usernameError: "",
    passwordError: "",
  });
 
  const usernameRef = useRef<HTMLInputElement | null>(null);
  // const mousePosition = useMousePointer();
  const localStorageHook = useLocalStorage();
  const [isPasswordShown, setIsPasswordShown] = useState(
    Boolean(localStorageHook.get("showPassword"))
  );
   const navigate=useNavigate();
  
  const [login,{isLoading}]=useLoginMutation();


 const handleLogin=async()=>{
  //   if(username==="dias"&&password==="12345"){
  //   localStorage.setItem("IsLoggedIn","true");
  //   navigate("/employee");
  // }
  // const response =await login({email:username,password:password});
  // localStorage.setItem("token",response.data? response.data.accessToken:"");

  // if(response.data) navigate("/employee");

  login({email:username,password:password})
  .unwrap()
  .then((response)=>{
    localStorage.setItem("token",response.accessToken);
    navigate("/employee");
  }).catch((error)=>{
    console.log(error)
    setError(error.data.message);
  })
}


  useEffect(() => {
    if (username.length > 20) {
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


  if(localStorage.getItem("token")){
    return <Navigate to="/employee"/>
  }
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
            {/* <p>{`x: ${mousePosition.x}, y: ${mousePosition.y}`}</p> */}
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
                  localStorageHook.set("showPassword", String(!oldVal));
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
          <div style={{color:"red"}}>
          {error&&error}
          </div>
          <Button
            label="Log In"
            onClick={handleLogin}
            isLoading={isLoading}
            disabled={isLoading}
            variants="default full-width"
          />
        </div>
      </main>
    </div>
  );
};


export default Login;
