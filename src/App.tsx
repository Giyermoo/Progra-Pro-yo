import { Routes, Route, Navigate } from "react-router-dom";
import { LoginForm } from "./features/auth/LoginForm";
import { useAuth } from "./features/auth/AuthContext";
import ProfileForm from "./features/profile/components/ProfileForm";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <main style={{
              minHeight: "100vh",
              backgroundColor: "#030712",
              color: "white",
              padding: "2rem 1rem",
            }}>
              <ProfileForm />
            </main>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;