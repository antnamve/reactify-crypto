import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { cryptoApi } from './services/cryptoApi'
import cryptoReducer from './slices/cryptoSlice'

export const store = configureStore({
	reducer: {
		crypto: cryptoReducer,
		[cryptoApi.reducerPath]: cryptoApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(cryptoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
