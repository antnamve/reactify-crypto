import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface ICrypto {}

interface State {
	crypto: ICrypto
}

const initialState: State = {
	crypto: [],
}

export const cryptoSlice = createSlice({
	name: 'crypto',
	initialState,
	reducers: {
		setCrypto: (state, action: PayloadAction<ICrypto[]>) => {
			state.crypto = action.payload
		},
	},
})

export const { setCrypto } = cryptoSlice.actions

export default cryptoSlice.reducer
