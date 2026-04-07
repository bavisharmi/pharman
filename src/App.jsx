import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Medicines from "./pages/Medicines";
import Billing from "./pages/Billing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/pharsec" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/medicines" element={<Medicines />} />
      <Route path="/billing" element={<Billing />} />
    </Routes>
  );
}

export default App;