export type GetDesksResponse = {
  items: GetDesksResponseItems[]
  maxCardsCount: number
  pagination: GetDesksResponsePagination
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type GetDeckById = {
  id: string
}

export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type GetDesksResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type GetDesksResponseItemsAuthor = {
  id: string
  name: string
}
export type GetDesksResponseItems = {
  author: GetDesksResponseItemsAuthor
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isBlocked?: boolean | null
  isDeleted?: boolean | null
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}
