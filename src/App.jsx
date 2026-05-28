import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashBoardLayout";

import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import TrainingDetails from "./pages/TrainingDetails";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import ReviewsManagementPage from "./pages/ReviewsManagementPage";
import Alert from "./components/Alert";

const AdminTrainingsPage = () => <h2>Zarządzanie Harmonogramem</h2>;
const TrainerSchedulePage = () => <h2>Mój Grafik</h2>;

export default function App() {
  return (
    <>
      <Alert />
      <BrowserRouter>
        <Routes>
          {/* ---------------- ŚCIEŻKI PUBLICZNE ---------------- */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/trainings/:slug" element={<TrainingDetails />} />
          </Route>

          {/* ---------------- ŚCIEŻKI CHRONIONE (WSPÓLNE) ---------------- */}
          <Route
            element={
              <ProtectedRoute allowedRoles={["user", "trainer", "admin"]} />
            }
          >
            <Route path="/profile" element={<DashboardLayout />}>
              <Route index element={<Navigate to="settings" replace />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

          {/* ---------------- PANEL ADMINA ---------------- */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/profile" element={<DashboardLayout />}>
              <Route path="manage-users" element={<Users />} />
              <Route path="manage-trainings" element={<AdminTrainingsPage />} />
              <Route path="manage-bookings" element={<Bookings />} />
              <Route
                path="manage-comments"
                element={<ReviewsManagementPage />}
              />
            </Route>
          </Route>

          {/* ---------------- PANEL TRENERA ---------------- */}
          <Route element={<ProtectedRoute allowedRoles={["trainer"]} />}>
            <Route path="/profile" element={<DashboardLayout />}>
              <Route path="my-schedule" element={<TrainerSchedulePage />} />
            </Route>
          </Route>

          {/* ---------------- PANEL KLIENTA ---------------- */}
          <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
            <Route path="/profile" element={<DashboardLayout />}>
              <Route path="my-bookings" element={<Bookings />} />
            </Route>
          </Route>

          <Route
            path="*"
            element={
              <div style={{ padding: "40px" }}>
                <h2>404 - Strona nie istnieje</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
