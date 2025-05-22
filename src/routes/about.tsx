import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: App,
});

function App() {
  return (
    <p>
      <code>About: | Go to</code>
      <Link className="App-link" to="/info">
        Info
      </Link>
    </p>
  );
}
