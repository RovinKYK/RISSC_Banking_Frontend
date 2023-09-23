import "./App.scss";
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Home/Homepage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { AuthContext } from "./context/Auth-context";


function App() {
  const { role, jwt } = useContext(AuthContext);
  return (
    <div className="App">
      {jwt ? (
        (role === "employee" || role === "manager") ? (
          <Routes>
            <Route path="/adminpanel/*" element={<AdminPanel />} />
            <Route path="*" element={<Navigate to="/adminpanel" replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/userdashboard/*" element={<UserDashboard />} />
            <Route
              path="*"
              element={<Navigate to="/userdashboard" replace />}
            />
          </Routes>
        )
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
