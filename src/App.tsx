import { Tab } from './components/ui/tabs/tabs'

export const App = () => {
  const tabs = [
    { title: 'Switcher', value: '1' },
    { title: 'Switcher', value: '2' },
    { title: 'Switcher', value: '3' },
    { title: 'Switcher', value: '4' },
    { title: 'Switcher', value: '5' },
  ]

  return (
    <div>
      <Tab tabs={tabs} />
    </div>
  )
}
