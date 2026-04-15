import { useState } from "react";

const sportsOptions = [
  "Fútbol",
  "Pádel",
  "Tenis",
  "Gym",
  "Basketball",
  "Running",
  "Vóleibol",
];

const skillLevels = ["Principiante", "Intermedio", "Avanzado"];

const availabilityOptions = [
  "Lunes AM",
  "Lunes PM",
  "Martes AM",
  "Martes PM",
  "Miércoles AM",
  "Miércoles PM",
  "Jueves AM",
  "Jueves PM",
  "Viernes AM",
  "Viernes PM",
  "Sábado AM",
  "Sábado PM",
  "Domingo AM",
  "Domingo PM",
];

type ProfileFormData = {
  name: string;
  sport: string;
  level: string;
  availability: string[];
  bio: string;
};

export default function ProfileForm() {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",
    sport: "",
    level: "",
    availability: [],
    bio: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvailabilityChange = (slot: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.availability.includes(slot);

      return {
        ...prev,
        availability: alreadySelected
          ? prev.availability.filter((item) => item !== slot)
          : [...prev.availability, slot],
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Perfil deportivo enviado:", formData);
    alert("Perfil deportivo guardado localmente. Revisa la consola.");
  };

  return (
    <section
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem" }}>
        Crear perfil deportivo
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "1rem",
          backgroundColor: "#111827",
          padding: "1.5rem",
          borderRadius: "16px",
          border: "1px solid #374151",
        }}
      >
        <div>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ej: Camilo"
            value={formData.name}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label htmlFor="sport" style={{ display: "block", marginBottom: "0.5rem" }}>
            Deporte principal
          </label>
          <select
            id="sport"
            name="sport"
            value={formData.sport}
            onChange={handleInputChange}
            style={inputStyle}
            required
          >
            <option value="">Selecciona un deporte</option>
            {sportsOptions.map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="level" style={{ display: "block", marginBottom: "0.5rem" }}>
            Nivel
          </label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleInputChange}
            style={inputStyle}
            required
          >
            <option value="">Selecciona tu nivel</option>
            {skillLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span style={{ display: "block", marginBottom: "0.75rem" }}>
            Disponibilidad horaria
          </span>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "0.5rem",
            }}
          >
            {availabilityOptions.map((slot) => {
              const selected = formData.availability.includes(slot);

              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => handleAvailabilityChange(slot)}
                  style={{
                    padding: "0.75rem",
                    borderRadius: "10px",
                    border: selected ? "2px solid #8b5cf6" : "1px solid #4b5563",
                    backgroundColor: selected ? "#6d28d9" : "#1f2937",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="bio" style={{ display: "block", marginBottom: "0.5rem" }}>
            Descripción breve
          </label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Ej: Juego fútbol 2 veces por semana y busco gente para partidos competitivos."
            value={formData.bio}
            onChange={handleInputChange}
            rows={4}
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "0.9rem 1rem",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#8b5cf6",
            color: "white",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Guardar perfil
        </button>
      </form>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem",
  borderRadius: "10px",
  border: "1px solid #4b5563",
  backgroundColor: "#1f2937",
  color: "white",
  outline: "none",
};