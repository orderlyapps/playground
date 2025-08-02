import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mapbox/")({
  component: MapboxPage,
});

function MapboxPage() {
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
      <h1>Mapbox</h1>
      <p>Welcome to the Mapbox page!</p>
      <div style={{ fontSize: "0.9rem", color: "#666" }}>
        This page is ready for your Mapbox integration.
      </div>
    </div>
  );
}
