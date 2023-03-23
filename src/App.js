import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Components/form.css";
import "./Components/comp.css";
import { Home } from "./Components/Home";
import { Signin } from "./Components/Sign-in";
import { Fpass1 } from "./Components/fPass1";
import { Fpass2 } from "./Components/Forgotpass2";
import { NavHor } from "./Components/NavHor";
import { NavVert } from "./Components/NavVert";
import { AuditLog } from "./Components/AuditLog";
import { ActivityRep } from "./Components/ActivityRep";
import { Settings } from "./Components/Settings";
import { ManageAction } from "./Components/ManageAction";
import { ManageBed } from "./Components/ManageBed";
import { ManageFloor } from "./Components/ManageFloor";
import { ManageWard } from "./Components/ManageWard";

function App() {
  return (
    <>
      <NavHor />
      <NavVert />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/audit-log" element={<AuditLog />}></Route>
          <Route path="/activity-report" element={<ActivityRep />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route
            path="/hospital-manage-action"
            element={<ManageAction />}
          ></Route>
          <Route path="/hospital-manage-bed" element={<ManageBed />}></Route>
          <Route
            path="/hospital-manage-floor"
            element={<ManageFloor />}
          ></Route>
          <Route path="/hospital-manage-ward" element={<ManageWard />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/Signin/forgot-password" element={<Fpass1 />}></Route>
          <Route path="/Signin/reset-password" element={<Fpass2 />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
