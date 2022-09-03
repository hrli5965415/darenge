import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slice/appSlice'
import docReducer from './slice/docSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    doc: docReducer,
  },
})