/** @format */

import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rootstate } from '../../redux/store/store';
import { TileDiv } from '../tile/tile';
import { SetColorAction, setTilesAction } from '../../redux/reducer/grid';
import { ITile } from '../../interfaces/Tile';
import styled from 'styled-components';

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  width: 150px;
  padding: 4px 12px;
  border: 1px solid black;
  border-radius: 4px;

  input[type='color'] {
    border: none;
    background: none;
    &::-webkit-color-swatch-wrapper {
      border: 1px solid black;
      border-radius: 4px;
    }
  }

  input[type='text'] {
    border: none;
    width: 100%;
    font-size: 14px;
  }
  input[type='number'] {
    border: none;
    width: 100%;
    font-size: 14px;
  }
`;

const Grid: FC = () => {
  const dispatch = useDispatch();
  const [inputTile, setInputTile] = useState(64);
  const [inputColor, setInputColor] = useState('black');

  const tiles = useSelector<Rootstate, ITile[]>((state) => state.board.tiles);

  useEffect(() => {
    dispatch(setTilesAction(inputTile));
  }, [inputTile]);

  const handleTileState = (tileId: string, color: string) => {
    dispatch(SetColorAction(tileId, color));
  };

  const handleTileStateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    return setInputTile(parseInt(event.currentTarget.value));
  };

  const handleColorState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputColor(event.currentTarget.value);
  };

  // const colorRange = (start: number, end: number, length = end - start + 1) => {
  //   Array.from({ length }, (_, i) => (
  //     <div onClick={handleColorState()} className={`color-${start + i}`}></div>
  //   ));
  // };

  return (
    <div className="board">
      <div className="form">
        <Container>
          <input
            type="number"
            onChange={handleTileStateChange}
            value={inputTile}
          />
        </Container>
        <Container>
          <input type="color" value={inputColor} onChange={handleColorState} />
          <input type="text" value={inputColor} />
        </Container>
      </div>
      <div className="grid">
        {tiles.map((item) => {
          return (
            <TileDiv
              key={item.id}
              id={item.id}
              color={item.color}
              onClick={() => handleTileState(item.id, inputColor)}
              hasColor={item.hasColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
