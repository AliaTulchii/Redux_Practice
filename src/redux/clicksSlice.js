import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const clicksSlice = createSlice({
    name: 'clicks',
    initialState: {value: 0},
    reducers: {
      update: (state, action) => {
        state.value += action.payload
      },
      
    },
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'value'
}

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer)
  
export const { update } = clicksSlice.actions

// Selectors

export const getClicksValue = state => state.clicks.value;

