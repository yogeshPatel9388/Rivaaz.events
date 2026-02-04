import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";
import VendorDetail from "./pages/VendorDetail";
import CostGuide from "./pages/CostGuide";
import Calendar from "./pages/Calendar";
import Ideas from "./pages/Ideas";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/vendor/:id" element={<VendorDetail />} />
          <Route path="/cost-guide" element={<CostGuide />} />
          <Route path="/calendar" element={<Calendar />} />;
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/profile" element={<Profile />} />
          {/* Fallback for routes not yet built */}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
                <h2 className="text-2xl font-bold">Coming Soon</h2>
                <p>We are still polishing this part of Rivaaz!</p>
              </div>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
