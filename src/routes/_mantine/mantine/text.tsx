import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mantine/mantine/text")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(mantine)/_mantine/text"!</div>;
}
