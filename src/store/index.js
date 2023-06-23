import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducerCellsAvailable from './reducers/reducerCellsAvailable'
import reducerDeviceUid from './reducers/reducerDeviceUid'

const rootReducer = combineReducers({
  reducerDeviceUid: reducerDeviceUid,
  reducerCellsAvailable: reducerCellsAvailable,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
