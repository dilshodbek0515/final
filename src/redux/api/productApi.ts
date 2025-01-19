import { api } from './index'

export const productApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    getShopDetail: build.query({
      query: (id: string) => ({
        url: `/${id}`
      }),
      providesTags: ['Product']
    })
  })
})

export const { useGetShopDetailQuery } = productApi
