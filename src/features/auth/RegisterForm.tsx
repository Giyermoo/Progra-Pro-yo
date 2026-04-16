import { useState } from "react";

export const RegisterForm = () => {
  // Task #22: Guardar usuario en estado temporal
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Task #21: Validación básica frontend
    if (!email.includes("@")) {
      setError("Por favor, ingresa un email válido."); // Task #23: Feedback visual
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setError("");
    alert(`Registro temporal exitoso para: ${email}`);
    console.log("Datos listos para enviar a la API:", { email, password });
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#111827', borderRadius: '12px', marginTop: '2rem', border: '1px solid #374151' }}>
      <h3 style={{ marginBottom: '1.5rem' }}>Registro de Usuario</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#1f2937', color: 'white' }} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '12px', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#1f2937', color: 'white' }} 
        />
        
        {/* Task #23: Mostrar feedback visual de error */}
        {error && <p style={{ color: '#ef4444', fontSize: '0.9rem' }}>{error}</p>}

        <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', border: 'none' }}>
          Registrarse
        </button>
      </form>
    </div>
  );
};