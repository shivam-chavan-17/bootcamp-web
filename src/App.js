import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import StudentDashboard from "./pages/StudentDashboard"
import AdminDashboard from "./pages/AdminDashboard";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* The first page in app */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />

          {/* Student Dashboard with Protected Route */}
          <Route path="/student-dashboard" element={
            <ProtectedRoute role='student'>
              <StudentDashboard />
            </ProtectedRoute>
          } />

          {/* Admin Dashboard with Protected Route */}
          <Route path="/admin-dashboard" element={
            <ProtectedRoute role='admin'>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
