import { Route, Routes } from "react-router-dom";
import "./Components/css/App.css";
import "./Components/css/form.css";
import "./Components/css/comp.css";
import "./Components/css/Manage.css";
import "react-toastify/dist/ReactToastify.css";
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
import { Protected } from "./Components/Protected";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <NavHor />

      <NavVert />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar="true"
        newestOnTop={true}
        limit={5}
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Signin/forgot-password" element={<Forgot_pass />}></Route>
        <Route path="/Signin/reset-password" element={<Reset_pass />}></Route>
      </Routes>
      <Routes>
        <Route
          path="/audit-log"
          element={<Protected Component={AuditLog} />}
        ></Route>
        <Route
          path="/activity-report"
          element={<Protected Component={ActivityRep} />}
        ></Route>
        <Route
          path="/settings"
          element={<Protected Component={Settings} />}
        ></Route>
      </Routes>

      <Routes>
        <Route path="/" element={<Protected Component={Dashboard} />}></Route>
        <Route
          path="/hospital-manage-bed"
          element={<Protected Component={ManageBed} />}
        ></Route>
        <Route
          path="/hospital-manage-ward"
          element={<Protected Component={ManageWard} />}
        ></Route>
        <Route
          path="/hospital-manage-action"
          element={<Protected Component={ManageAction} />}
        ></Route>
        <Route
          path="/hospital-manage-floor"
          element={<Protected Component={ManageFloor} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
