import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface CryptoApiResponse {
	body: string
}

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://openapiv1.coinstats.app' }),
	endpoints: builder => ({
		getCurrencies: builder.query<null, string | null>({
			query: () => ({
				url: '/coins',
				headers: {
					'X-API-KEY': 'BI2KvrLyVPGJmyAlf2VYzpnmrpu51b+iCUWw9ZUe2H4=',
				},
			}),
		}),
	}),
})

export const { useGetCurrenciesQuery } = cryptoApi
