
import './App.css';
import {Routes,Route} from 'react-router-dom';
//import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import ProfilePage from "./components/ProfilePage";
import SignInPage from "./components/SignInPage";
import "./components/style.css";

function App() {
  return (
   
    <Routes>
   <Route path="/" element={<MainPage/>} />
   <Route  path="/signin" element={<SignInPage/>} />
   <Route  path="/profile" element={<ProfilePage/>} />
    </Routes>
  );
}

export default App;
