import { LoginForm } from '@/components/auth/login-form/login-form'

export const App = () => {
  return (
    <div className={'wrapper'}>
      <div className={'header'}>
        <div className={'header__container'}>
          <div className={'header__block-left'}>
            <h2>Привет</h2>
            <p className={'header__text'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s.
            </p>
            <button>Click me</button>
          </div>
          <div className={'header__block-right'}>
            <h2>Пока</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
      <div className={'main'}>
        <div className={'main__container'}>
          <div className={'main__block-left'}>
            <h2>Привет</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s.
            </p>
            <button className={'main__btn'}>Click me</button>
          </div>
          <div className={'main__block-right'}>
            <h2>Пока</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
      <div className={'form'}>
        <div className={'form__container'}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
