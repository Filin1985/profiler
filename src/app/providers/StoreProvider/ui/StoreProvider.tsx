import React from "react"
import {Provider} from "react-redux"
import {createReduxStore} from "../config/store"
import {StateSchema} from "../config/StateSchema"
import {DeepPartial} from "@reduxjs/toolkit"

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {children, initialState, asyncReducers} = props

  const store = createReduxStore(initialState as StateSchema, asyncReducers)

  return <Provider store={store}>{children}</Provider>
}
