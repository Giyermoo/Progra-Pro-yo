import "./App.css";
import ProfileForm from "./features/profile/components/ProfileForm";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#030712",
        color: "white",
        padding: "2rem 1rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Plataforma de Matching Deportivo
      </h1>

      <ProfileForm />
    </main>
  );
}

export default App;