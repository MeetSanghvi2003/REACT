import { useState } from "react";
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
  const [mystyle, setmystyle] = useState("light");
  const toggleStyle = () => {
    if (mystyle !== "dark") {
      setmystyle("dark");
    } else {
      setmystyle("light");
    }
  };
  return (
    <>
      <NavHor toggleStyle={toggleStyle} mystyle={mystyle} />
      <NavVert mystyle={mystyle} />
      <div className={`container ${mystyle}`}>
        <Routes>
          <Route path="/" element={<Dashboard mystyle={mystyle} />}></Route>
          <Route
            path="/audit-log"
            element={<AuditLog mystyle={mystyle} />}
          ></Route>
          <Route
            path="/activity-report"
            element={<ActivityRep mystyle={mystyle} />}
          ></Route>
          <Route
            path="/settings"
            element={<Settings mystyle={mystyle} />}
          ></Route>
          <Route
            path="/hospital-manage-action"
            element={<ManageAction mystyle={mystyle} />}
          ></Route>
          <Route
            path="/hospital-manage-bed"
            element={<ManageBed mystyle={mystyle} />}
          ></Route>
          <Route
            path="/hospital-manage-floor"
            element={<ManageFloor mystyle={mystyle} />}
          ></Route>
          <Route
            path="/hospital-manage-ward"
            element={<ManageWard mystyle={mystyle} />}
          ></Route>
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
