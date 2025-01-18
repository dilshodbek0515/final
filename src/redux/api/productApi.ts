import { api } from './index'

export const movieApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    getShopDetail: build.query({
      query: (id: string) => ({
        url: `/product/${id}`
      }),
      providesTags: ['Product']
    })
  })
})

export const { useGetShopDetailQuery } = movieApi
