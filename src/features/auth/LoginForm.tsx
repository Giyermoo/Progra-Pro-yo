import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });
      const data = await res.json();
      login({ email: data.email, name: data.name, picture: data.picture });
      navigate("/profile");
    },
    onError: () => console.log("Error en login"),
  });

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#030712",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        backgroundColor: "#111827",
        padding: "3rem",
        borderRadius: "16px",
        border: "1px solid #374151",
        textAlign: "center",
        maxWidth: "400px",
        width: "100%",
      }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>FitMatch</h1>
        <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
          Encuentra tu compañero deportivo
        </p>
        <button
          onClick={() => handleGoogleLogin()}
          style={{
            width: "100%",
            padding: "0.9rem",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#8b5cf6",
            color: "white",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}