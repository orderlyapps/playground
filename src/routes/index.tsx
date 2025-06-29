import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <code style={{ fontSize: "2rem" }}>Playground</code>
      <Link to="/mantine/buttons">Mantine</Link>
      <Link to="/pdf-lib">PDFLib</Link>
      <Link to="/jspdf/jspdf">jsPDF</Link>
    </div>
  );
}
