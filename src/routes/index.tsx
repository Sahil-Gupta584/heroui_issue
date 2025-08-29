import { Button, HeroUIProvider } from '@heroui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <HeroUIProvider>


  <Button variant='bordered' color='primary' className='bg-red-50'>hi</Button>
    </HeroUIProvider>
  )
}
