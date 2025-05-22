import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: App,
});

function App() {
  return (
    <div
      style={{ viewTransitionName: "slide-in" }}
      className="app-content center about"
    >
      <div>About</div>
    </div>
  );
}
