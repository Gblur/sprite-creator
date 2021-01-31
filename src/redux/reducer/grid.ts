/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Action } from 'redux';
import { isTemplateExpression } from 'typescript';
import gridGenerate from '../../functions/generate';
import { ITile } from '../../interfaces/Tile';

interface Board {
  tiles: ITile[];
}
const intialState: Board = {
  tiles: [],
};

const SETCOLOR = 'grid/SetColor';
type SetColorAction = Action<typeof SETCOLOR>;
interface combineSetColor extends SetColorAction {
  payload: string;
}
export const SetColorAction = (id: string): combineSetColor => ({
  type: SETCOLOR,
  payload: id ,
});

const SETTILES = 'grid/setTiles';
type SetTilesAction = Action<typeof SETTILES>;
interface combineSetTiles extends SetTilesAction {
  payload: number;
}
export const SetTilesAction = (amount: number): combineSetTiles => ({
  type: SETTILES,
  payload: amount,
});

const BoardReducer = (
  state: Board = intialState,
  action: combineSetTiles | combineSetColor
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
    case SETCOLOR:{
      const color = action.payload;
      const tiles = state.tiles.map(item => color === item.id ? {...item, hasColor: true} : item )
      return {
        ...state,
        tiles: tiles
      }
    } 
    default:
      return state;
  }
};

export default BoardReducer;
