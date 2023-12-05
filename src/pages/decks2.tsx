import { Link } from 'react-router-dom'

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/components/ui'
import { useGetDeckByIdQuery, useGetDecksQuery } from '@/services/decks.service'

export const Decks2 = () => {
  const { data, error, isLoading } = useGetDecksQuery()
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: 'clp19j1th1l7vvo2q5em2i8mj' })

  console.log('deckByIdData: ', deckByIdData)
  if (error) {
    return (
      <>
        <h1>An error has occured........</h1>
      </>
    )
  }

  if (isLoading) {
    return <h1>Loading......</h1>
  }

  return (
    <div>
      <Link to={'/'}>Decks</Link>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items?.map(deck => {
            return (
              <TableRow key={deck.id}>
                <TableCell>{deck?.name}</TableCell>
                <TableCell>{deck?.cardsCount}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
