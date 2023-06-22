import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducerDeviceUid from './redux/reducerDeviceUid'
import reducerCellsAvailable from './redux/reducerCellsAvailable'

const rootReducer = combineReducers({ reducerDeviceUid, reducerCellsAvailable })

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
