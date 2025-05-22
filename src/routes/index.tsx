import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";
import "../App.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Playground</code>
        </p>
      </header>
    </div>
  );
}
