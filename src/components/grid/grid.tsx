/** @format */

import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rootstate } from '../../redux/store/store';
import Tile from '../tile/index';
import { SetTiles } from '../../redux/reducer/grid';
import { ITile } from '../../interfaces/Tile';

const Grid: FC = () => {
  const dispatch = useDispatch();
  const [tile, settile] = useState(0);
  const tiles = useSelector<Rootstate, ITile[]>((state) => state.board.tiles);

  useEffect(() => {
    dispatch(SetTiles(tile));
  }, [tile]);

  const handleTileState = (event: React.ChangeEvent<HTMLInputElement>) => {
    return settile(parseInt(event.currentTarget.value));
  };

  return (
    <div className="board">
      <div className="form">
        <input type="number" onChange={handleTileState} />
      </div>
      <div className="grid">
        {tiles.map((item) => {
          return (
            <Tile
              key={item.id}
              id={item.id}
              color={item.color}
              hasColor={item.hasColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
