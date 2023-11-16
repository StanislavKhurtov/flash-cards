import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination'

export const App = () => {
  const [page, setPage] = useState(1)
  const onChange = (page: number, count: number) => {
    setPage(page)
    console.log(page)
    console.log(count)
  }

  return (
    <div>
      <Pagination onChange={onChange} page={page} totalCount={900} />
    </div>
  )
}
