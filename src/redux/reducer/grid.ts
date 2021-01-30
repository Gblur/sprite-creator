import React from 'react';
import { Action } from 'redux';
import gridGenerate from '../../functions/generate';
import { Rootstate } from '../store/store';
import { ITile } from '../../interfaces/Tile';
import Tile from '../../components/tile';

interface Board {
  tiles: ITile[];
}
const intialState: Board = {
  tiles: [],
};

// const SETCOLOR = 'grid/setColor';
// type SetColorAction = Action<typeof SETCOLOR>;
// export const SetColor = (payload): SetColorAction => ({
//     color: payload;
// })

const SETTILES = 'grid/setTiles';
type SetTilesAction = Action<typeof SETTILES>;
interface combineTilesParam extends SetTilesAction {
  payload: number;
}
export const SetTiles = (event: number): combineTilesParam => ({
  type: SETTILES,
  payload: event,
});

const BoardReducer = (
  state: Board = intialState,
  action: combineTilesParam
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
    default:
      return state;
  }
};

export default BoardReducer;
