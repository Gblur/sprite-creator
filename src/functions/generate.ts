import { ITile } from '../interfaces/Tile';

const gridGenerate = (size: number): ITile[] => {
  const tiles = [];
  for (let i = 0; i < size; i++) {
    const data = {
      id: i.toString(),
      color: 'white',
      hasColor: false,
    };
    tiles.push(data);
  }

  return tiles;
};

export default gridGenerate;
