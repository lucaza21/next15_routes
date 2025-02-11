
export default function ComplexDashboardLayout( {children, users, revenue, notifications} ) {
  return (
    <div style={{ display: "flex" }}>
      {/* Contenedor izquierdo con users y revenue */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {users}
        {revenue}
      </div>

      {/* Contenedor derecho con notifications */}
      <div style={{ flex: 1 }}>{notifications}</div>
    </div>
  );
}
