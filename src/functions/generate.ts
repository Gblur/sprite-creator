import { ITile } from '../interfaces/Tile';
import { v4 as uuid } from 'uuid';

const gridGenerate = (size: number): ITile[] => {
  const tiles = [];
  for (let i = 0; i < size; i++) {
    const data = {
      id: uuid(),
      color: '#fff',
    };
    tiles.push(data);
  }

  return tiles;
};

export default gridGenerate;
