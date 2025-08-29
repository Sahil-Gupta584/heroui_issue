import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_centered/dashboard/new/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_centered/dashboard/new/"!</div>
}
