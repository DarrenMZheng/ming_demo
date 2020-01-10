import { combineReducers } from 'redux';

import { undoneProspectsList, overProspectsList} from './prospectsReducer.js'


const rootReducer = combineReducers({
  undoneProspectsList,
  overProspectsList
})

export default rootReducer;