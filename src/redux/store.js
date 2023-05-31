import { configureStore } from '@reduxjs/toolkit'
import { clicksReducer } from './clicksSlice'
import { persistStore } from 'redux-persist'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'




export const store = configureStore({
    reducer: {
        clicks: clicksReducer,
    },
    middleware (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    }
})

export const persistor = persistStore(store);