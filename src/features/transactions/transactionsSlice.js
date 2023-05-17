import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      state[action.payload.category].push(action.payload);
      return state;

    },

    deleteTransaction: (state, action) => {
      const { id, category, } = action.payload
      state[category] = state[category].filter(transaction => transaction.id !== id)

    }
  }
})

export const { addTransaction, deleteTransaction } = transactionsSlice.actions
export default transactionsSlice.reducer

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);