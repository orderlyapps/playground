import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$post_id")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <p>
      <code>Playground Post: {Route.useParams().post_id}</code>
    </p>
  );
}
