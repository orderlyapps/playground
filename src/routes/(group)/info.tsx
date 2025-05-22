import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(group)/info")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <p>
      <code>Info</code>
    </p>
  );
}
