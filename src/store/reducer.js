import { combineReducers } from 'redux';
import tasksReducer from '../containers/homePage/reducer';
import { reducer as formReducer } from 'redux-form'

export default function createReducer() {
    const rootReducer = combineReducers({
        tasksReducer,
        form: formReducer
    });
  
    return rootReducer;
  }