import { LoginForm } from '@/components/auth/login-form/login-form'
import {Table} from "@/components/ui/table";

const columnOrder = ['title', 'cardsCount', 'updated', 'createdBy']

const data = [
  {
    cardsCount: 100,
    createdBy: 'Илья Кузнецов',
    figma: 3,
    title: 'Pack Name A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 23,
    createdBy: 'Анастасия Смирнова',
    figma: 3,
    title: 'Pack Name B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Дмитрий Петров',
    figma: 3,
    title: 'Pack Name C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 6,
    createdBy: 'Екатерина Иванова',
    figma: 3,
    title: 'Pack Name D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 24,
    createdBy: 'Александр Федоров',
    figma: 3,
    title: 'Pack Name E',
    updated: '2023-07-04',
  },
]

export const App = () => {
  return (
    <div className={'wrapper'} >
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
      <div className={'table'}>
        <div className="table__container">
          <Table data={data} columnOrder={columnOrder} />
        </div>
      </div>
    </div>
  )
}
