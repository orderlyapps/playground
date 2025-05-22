import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <p>
      <code>Playground Home</code>
    </p>
  );
}
