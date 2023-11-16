import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Pagination } from './pagination'

export default {
  component: Pagination,
  title: 'Components/Navigation/Pagination',
} as Meta<typeof Pagination>

export const Default = () => {
  const [page, setPage] = useState(1)
  const onChange = (page: number, count: number) => {
    setPage(page)
    console.log(page)
    console.log(count)
  }

  return <Pagination onChange={onChange} page={page} totalCount={900} />
}
