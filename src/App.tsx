import "./App.css";
import Login from "./pages/login/Login";
import MainPage from "./pages/mainPage/mainPage";

function App() {
  const isLogin = false;
  return <>{isLogin ? <Login /> : <MainPage />}</>;
}

export default App;
