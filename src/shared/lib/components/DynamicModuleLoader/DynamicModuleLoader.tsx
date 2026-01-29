import {Reducer} from "@reduxjs/toolkit"
import {useAppDispatch} from "app/providers/StoreProvider"
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema"
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice"
import {FC, useEffect} from "react"
import {useStore} from "react-redux"

interface DynamicModuleLoaderProps {
  name: StateSchemaKey
  reducer: Reducer
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {children, name, reducer, removeAfterUnmount} = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    store.reducerManager.add(name, reducer)
    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(name)
      }
    }
  }, [])

  return <>{children}</>
}
