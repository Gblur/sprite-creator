/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Action } from 'redux';
import gridGenerate from '../../functions/generate';
import { ITile } from '../../interfaces/Tile';

export interface Board {
  tiles: ITile[];
}
const intialState: Board = {
  tiles: [],
};

// const defaultState = () => {
//   const serializedState = localStorage.getItem('tiles');
//   if (serializedState === null) {
//     return undefined;
//   }
//   return JSON.parse(serializedState) || intialState;
// };

const SETCOLOR = 'grid/SetColor';
type SetColorAction = Action<typeof SETCOLOR>;
interface combineSetColor extends SetColorAction {
  payload: { id: string; color: string };
}
export const SetColorAction = (id: string, color: string): combineSetColor => ({
  type: SETCOLOR,
  payload: {
    id,
    color,
  },
});

const UPDATECOLOR = 'grid/UpdateColor';
type UpdateColorAction = Action<typeof UPDATECOLOR>;
interface combineUpdateColor extends UpdateColorAction {
  payload: string;
}
export const UpdateColorAction = (id: string): combineUpdateColor => ({
  type: UPDATECOLOR,
  payload: id,
});

const SETTILES = 'grid/setTiles';
type SetTilesAction = Action<typeof SETTILES>;
interface combineSetTiles extends SetTilesAction {
  payload: number;
}
export const setTilesAction = (amount: number): combineSetTiles => ({
  type: SETTILES,
  payload: amount,
});

const BoardReducer = (
  state: Board = intialState,
  action: combineSetTiles | combineSetColor | combineUpdateColor
) => {
  switch (action.type) {
    case SETTILES: {
      const size = action.payload;
      const tiles = gridGenerate(size);
      return {
        ...state,
        tiles: tiles,
      };
    }
    case SETCOLOR: {
      const id = action.payload.id;
      const tiles = state.tiles.map((item) =>
        id === item.id ? { ...item, color: action.payload.color } : item
      );
      return {
        ...state,
        tiles: tiles,
      };
    }
    default:
      return state;
  }
};

export { BoardReducer };
