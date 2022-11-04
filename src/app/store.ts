import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { productsApi } from './productsApi'
import { seedStoreApi } from './seedsStoreApi'
/**
* The Redux Store is configured using the auto-generated reducers and
* middlewares from the RTK Query API configuration.
*/
export const store =configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [seedStoreApi.reducerPath]: seedStoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      seedStoreApi.middleware,
    )
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
