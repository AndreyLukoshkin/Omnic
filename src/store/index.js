import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducerDeviceUid from './reducers/reducerDeviceUid'
import reducerCellsAvailable from './reducers/reducerCellsAvailable'

const rootReducer = combineReducers({
  reducerDeviceUid: reducerDeviceUid,
  reducerCellsAvailable: reducerCellsAvailable,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
