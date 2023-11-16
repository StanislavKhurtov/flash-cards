import * as Tabs from '@radix-ui/react-tabs'

import './tabs.module.scss'

export const TabsDemo = () => (
  <Tabs.Root className={'TabsRoot'} defaultValue={'tab1'}>
    <Tabs.List aria-label={'Manage your account'} className={'TabsList'}>
      <Tabs.Trigger className={'TabsTrigger'} value={'tab1'}>
        Account
      </Tabs.Trigger>
      <Tabs.Trigger className={'TabsTrigger'} value={'tab2'}>
        Password
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className={'TabsContent'} value={'tab1'}>
      <p className={'Text'}>Make changes to your account here. Click save when youre done.</p>
      <fieldset className={'Fieldset'}>
        <label className={'Label'} htmlFor={'name'}>
          Name
        </label>
        <input className={'Input'} defaultValue={'Pedro Duarte'} id={'name'} />
      </fieldset>
      <fieldset className={'Fieldset'}>
        <label className={'Label'} htmlFor={'username'}>
          Username
        </label>
        <input className={'Input'} defaultValue={'@peduarte'} id={'username'} />
      </fieldset>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <button className={'Button green'}>Save changes</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className={'TabsContent'} value={'tab2'}>
      <p className={'Text'}>Change your password here. After saving, youll be logged out.</p>
      <fieldset className={'Fieldset'}>
        <label className={'Label'} htmlFor={'currentPassword'}>
          Current password
        </label>
        <input className={'Input'} id={'currentPassword'} type={'password'} />
      </fieldset>
      <fieldset className={'Fieldset'}>
        <label className={'Label'} htmlFor={'newPassword'}>
          New password
        </label>
        <input className={'Input'} id={'newPassword'} type={'password'} />
      </fieldset>
      <fieldset className={'Fieldset'}>
        <label className={'Label'} htmlFor={'confirmPassword'}>
          Confirm password
        </label>
        <input className={'Input'} id={'confirmPassword'} type={'password'} />
      </fieldset>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <button className={'Button green'}>Change password</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
)
