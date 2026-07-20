import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./pages/Navbars";
import Home from "./pages/Home";
import RoutesPage from "./pages/Routes"; 
import Schedule from "./pages/Schedule";
import Track from "./pages/Track";
import UserLogin from "./pages/UserLogin";
import StaffLogin from "./pages/StaffLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/track" element={<Track />} />
        
          <Route path="/login" element={<UserLogin />} />
          <Route path="/staff-login" element={<StaffLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;