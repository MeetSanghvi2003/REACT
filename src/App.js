import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { Signin } from "./Components/Sign-in";
import { Fpass1 } from "./Components/fPass1";
import { Fpass2 } from "./Components/Forgotpass2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Signin/forgot-password" element={<Fpass1 />}></Route>
        <Route path="/Signin/reset-password" element={<Fpass2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
