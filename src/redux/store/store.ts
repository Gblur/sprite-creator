import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BoardReducer } from '../reducer/grid';
import { UserReducer } from '../reducer/userevents';
import { loadState, saveState } from './localStorage';

export const rootReducer = combineReducers({
  tiles: BoardReducer,
  users: UserReducer,
});
export type Rootstate = ReturnType<typeof rootReducer>;

const middleWare = applyMiddleware(thunk);

const composeEnhancer = composeWithDevTools({});

export const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(middleWare)
);

export { store };
