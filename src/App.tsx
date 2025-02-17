import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyCalendar from "./pages/dashboard";
import Login from "./pages/login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Calender" element={<MyCalendar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/liveChat" element={<MyCalendar />} />
        <Route path="/" element={<MyCalendar />} />
      </Routes>
    </Router>
  );
}
