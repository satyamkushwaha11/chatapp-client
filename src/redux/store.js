import { configureStore } from '@reduxjs/toolkit'
import AllReducers from './reducer'

const store = configureStore({
  reducer: AllReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

})

export default store