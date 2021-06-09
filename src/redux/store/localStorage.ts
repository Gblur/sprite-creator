import { ITile } from '../../interfaces/Tile';
import { Board } from '../reducer/grid';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tiles');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    //
  }
};

export const saveState = (state: ITile[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tiles', serializedState);
  } catch (err) {
    //
  }
};
