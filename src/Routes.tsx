import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import QuotesList from "./pages/QuotesList";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quotes-list" element={<QuotesList />} />
      </Routes>
    </Router>
  );
}
