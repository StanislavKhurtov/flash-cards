import { Button } from '@/components/ui/button/button'

export const App = () => {
  return (
    <div>
      <Button variant={'primary'}>Click me</Button>
      <Button variant={'secondary'}>Click me</Button>
      <Button variant={'tertiary'}>Click me</Button>
      <Button variant={'link'}>Click me</Button>
      <Button as={'a'} href={'https://google.com'} target={'_blank'}>
        Привет
      </Button>
    </div>
  )
}
