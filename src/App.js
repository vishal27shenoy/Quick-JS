import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Landing from "./landing/Landing";

import Projects from "./projects/Projects";
import Schema from "./schema/Schema";
import Settings from "./settings/Settings";
import Home from "./Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<Dashboard />}>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/schemas" element={<Schema />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
