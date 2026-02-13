import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";
import VendorDetail from "./pages/VendorDetail";
import CostGuide from "./pages/CostGuide";
import Calendar from "./pages/Calendar";
import Ideas from "./pages/Ideas";
import Profile from "./pages/Profile";
import VendorTeam from "./pages/VendorTeam";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Auth pages remain separate and full-screen */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" replace /> : <Signup />}
        />

        {/* REMOVED the outer ProtectedRoute wrapper. 
            Now the Layout and Pages are public by default.
        */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/vendor/:id" element={<VendorDetail />} />
                <Route path="/vendor-team" element={<VendorTeam />} />
                <Route path="/cost-guide" element={<CostGuide />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/ideas" element={<Ideas />} />

                {/* You can still use ProtectedRoute for SINGLE pages 
                    if you want them strictly private (like Profile).
                */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                <Route path="*" element={<ComingSoon />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

// Small helper for the fallback
const ComingSoon = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
    <h2 className="text-2xl font-bold font-tradition text-rivaaz-dark">
      Coming Soon
    </h2>
    <p className="font-modern italic">
      We are still polishing this part of Rivaaz!
    </p>
  </div>
);

export default App;
