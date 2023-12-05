import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks.service'

export const Decks = () => {
  const [page, setPage] = useState(1)
  const [selectedCount, setSelectedCount] = useState<number>(10)
  const [createDeck, deckCreationStatus] = useCreateDeckMutation()

  console.log(setSelectedCount)

  const { data, error, isLoading } = useGetDecksQuery({
    currentPage: page,
    itemsPerPage: selectedCount,
  })

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
  const onChange = (page: number) => {
    setPage(page)
  }

  return (
    <div>
      <Button
        disabled={deckCreationStatus.isLoading}
        onClick={() => createDeck({ name: 'NEW new1111' })}
      >
        +++
      </Button>
      <Link to={'/decks2'}>Decks2</Link>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Updated</TableHeadCell>
            <TableHeadCell>Author</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items?.map(deck => {
            return (
              <TableRow key={deck.id}>
                <TableCell>{deck?.name}</TableCell>
                <TableCell>{deck?.cardsCount}</TableCell>
                <TableCell>{new Date(deck?.updated).toLocaleDateString()}</TableCell>
                <TableCell>{deck?.author.name}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <Pagination count={selectedCount} onChange={onChange} page={page} />
    </div>
  )
}
