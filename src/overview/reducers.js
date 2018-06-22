import { combineReducers } from 'redux'

import overviewReducer from './components/Overview/reducers'
import quickUpdatesReducer from './components/QuickUpdates/reducers'
import devicesReducer from './components/Devices/reducers'
import browsePopularReducer from './components/BrowsePopular/reducers'
import accountCheckupReducer from './components/AccountCheckup/reducers'
import SecurityReducer from './components/Security/reducers'

const rootReducer = combineReducers({
  overview: overviewReducer,
  quickUpdates: quickUpdatesReducer,
  devices: devicesReducer,
  popular: browsePopularReducer,
  account: accountCheckupReducer,
  security: SecurityReducer,
  
})

export default rootReducer

