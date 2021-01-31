/** @format */

import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rootstate } from '../../redux/store/store';
import {TileDiv} from '../tile/tile';
import { SetColorAction, SetTilesAction } from '../../redux/reducer/grid';
import { ITile } from '../../interfaces/Tile';

const Grid: FC = () => {
  const dispatch = useDispatch();
  const [tile, settile] = useState(0);
  const [color, setColor] = useState('black')

  const tiles = useSelector<Rootstate, ITile[]>((state) => state.board.tiles);

  useEffect(() => {
    dispatch(SetTilesAction(tile));
  }, [tile]);

  const handleColorState = (tileId: string) => {
    dispatch(SetColorAction(tileId)) 
  }

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
            <TileDiv
              key={item.id}
              id={item.id}
              color={item.hasColor ? color : 'white'}
              onClick={() => handleColorState(item.id)}
              hasColor={item.hasColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
