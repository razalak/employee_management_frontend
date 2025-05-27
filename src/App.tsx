import "./App.css";
import Login from "./pages/login/Login";
// import UncontrolledLogin from "./pages/login/UncontrolledLogin";
import MainPage from "./pages/mainPage/mainPage";

function App() {
  const isLogin = true;
  return <>{isLogin ? <Login /> : <MainPage />}</>;
}

export default App;
