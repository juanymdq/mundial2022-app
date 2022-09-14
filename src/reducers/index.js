import { combineReducers } from "redux";
import TeamsReducer from './TeamsReducer'

const reducer = combineReducers({    
    teams: TeamsReducer
});

export default reducer;