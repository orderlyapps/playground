import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_mantine/mantine/buttons')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mantine/buttons"!</div>
}
