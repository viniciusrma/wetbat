import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
