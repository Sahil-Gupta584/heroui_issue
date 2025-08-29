import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_centered')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_centered"!</div>
}
