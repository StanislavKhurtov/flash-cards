import { ReactNode } from 'react'

import { Button } from '@/components/ui/button/button'

type IconProps = {
  children: ReactNode
  height: string
  width: string
}
export const App = () => {
  return (
    <div>
      <Button variant={'primary'}>Button primary</Button>
      <Button variant={'secondary'}>Button Secondary</Button>
      <Button variant={'tertiary'}>Tertiary</Button>
      <Button variant={'link'}>Link-button</Button>
      <Button as={'a'} href={'https://google.com'} target={'_blank'}>
        Привет
      </Button>
      <Icon height={'24'} width={'24'}>
        <path
          d={
            'M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12zm0 22.91C6.48 22.91.91 17.34.91 11.82.91 6.29 6.48.72 12 .72c5.52 0 10.09 5.57 10.09 11.09 0 5.52-4.57 10.09-10.09 10.09zm3.06-15.19l-1.44 1.06c-.41-.55-1.04-.93-1.77-.93-.73 0-1.37.38-1.78.93l-1.43-1.06c.77-1.04 1.97-1.72 3.32-1.72 1.36 0 2.56.68 3.32 1.73zm-7.38 1.06L6.24 8.77C5.81 9.23 5.5 9.81 5.5 10.43V12H4v-1.57c0-.62.31-1.2.84-1.66l1.44 1.06zm3.19 3.96v1.57c0 .62-.31 1.2-.84 1.66l-1.44-1.06c.33-.4.53-.91.53-1.47 0-1.24-1-2.24-2.24-2.24S4 11.12 4 12.35c0 .56.2 1.07.53 1.47l-1.44 1.06c-.53-.46-.84-1.04-.84-1.66V12h-1.5v-1.57c0-.62.31-1.2.84-1.66l1.44 1.06C3.69 9.23 4 9.81 4 10.43v1.57h1.5V10.43c0-.62.31-1.2.84-1.66l1.44 1.06c-.33.4-.53.91-.53 1.47 0 1.24 1 2.24 2.24 2.24s2.24-1 2.24-2.24c0-.56-.2-1.07-.53-1.47l1.44-1.06c.53.46.84 1.04.84 1'
          }
          fill={'#ffffff'}
        />
      </Icon>
    </div>
  )
}

export const Icon: React.FC<IconProps> = ({ children, ...props }) => (
  <svg {...props} xmlns={'http://www.w3.org/2000/svg'}>
    {children}
  </svg>
)
