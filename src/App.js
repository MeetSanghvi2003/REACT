import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Components/form.css";
import "./Components/comp.css";
import "./Components/Manage.css";
import { Dashboard } from "./Components/DashBoard";
import { Signin } from "./Components/Sign-in";
import { Reset_pass } from "./Components/Reset_pass";
import { NavHor } from "./Components/NavHor";
import { NavVert } from "./Components/NavVert";
import { AuditLog } from "./Components/AuditLog";
import { ActivityRep } from "./Components/ActivityRep";
import { Settings } from "./Components/Settings";
import { ManageAction } from "./Components/ManageAction";
import { ManageBed } from "./Components/ManageBed";
import { ManageFloor } from "./Components/ManageFloor";
import { ManageWard } from "./Components/ManageWard";
import { Forgot_pass } from "./Components/Forgot_pass";
import { Chart } from "./Components/chart";

function App() {
  return (
    <>
      <NavHor />
      <NavVert />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
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
          <Route
            path="/Signin/forgot-password"
            element={<Forgot_pass />}
          ></Route>
          <Route path="/Signin/reset-password" element={<Reset_pass />}></Route>
        </Routes>
      </div>
      {/* <Chart /> */}
    </>
  );
}

export default App;
