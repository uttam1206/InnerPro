import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const configureStore = rootReducer => {
  const composeEnhancers = compose

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}

export default configureStore

