import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <p>
      <code>Go to Post: </code>
      <Link className="App-link" to="/posts/$post_id" params={{ post_id: "1" }}>
        1
      </Link>
      <Link className="App-link" to="/posts/$post_id" params={{ post_id: "2" }}>
        2
      </Link>
      <Link className="App-link" to="/posts/$post_id" params={{ post_id: "3" }}>
        3
      </Link>
    </p>
  );
}
