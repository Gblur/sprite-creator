import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import BoardReducer from '../reducer/grid';

const rootReducer = combineReducers({
  board: BoardReducer,
});

export type Rootstate = ReturnType<typeof rootReducer>;

const composeEnhancer = composeWithDevTools({});

export const store = createStore(rootReducer, composeEnhancer());
