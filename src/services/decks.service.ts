import { baseApi } from '@/services/base-api'
import {
  CreateDeckArgs,
  GetDeckById,
  GetDecksArgs,
  GetDesksResponse,
} from '@/services/flachcards.type'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      getDeckById: builder.query<GetDesksResponse, GetDeckById>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<GetDesksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            params: args ?? {},
            url: `v1/decks`,
          }
        },
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDeckByIdQuery, useGetDecksQuery } = decksService
