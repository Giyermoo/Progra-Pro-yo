import "./App.css";
import ProfileForm from "./features/profile/components/ProfileForm";
import {} from "lucide-react"; // Necesitas haber hecho el 'bun add lucide-react'
import { RegisterForm } from "./features/auth/RegisterForm";
import { useGoogleLogin } from '@react-oauth/google';

function App() {
  // Esta función llama al servicio de Google
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log('Logueado con éxito:', tokenResponse),
    onError: () => console.log('Error en el Login'),
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#030712",
        color: "white",
        padding: "2rem 1rem",
        fontFamily: "sans-serif"
      }}
    >
      <nav style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
        <button 
    onClick={() => login()} // Esto abre Google
    style={{ /* tus estilos actuales */ }}
  >
    Sign in with Google
  </button>
      </nav>
      <RegisterForm />
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "2rem" }}>
        Plataforma de Matching Deportivo
      </h1>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <ProfileForm />
      </div>
    </main>
  );
}

export default App;