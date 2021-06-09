/** @format */

import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rootstate } from '../../redux/store/store';
import { TileDiv } from '../tile/tile';
import {
  Board,
  SetColorAction,
  setTilesAction,
} from '../../redux/reducer/grid';
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

const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border: 1px solid black;
  border-radius: 4px;
  justify-content: center;
`;

//Grid Style

type GridProps = {
  columnSize: number;
  rowSize: number;
};

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnSize}, 1fr);
  grid-template-rows: repeat(${(props) => props.rowSize}, 1fr);
`;

const Grid: FC = () => {
  const dispatch = useDispatch();
  const [columns, setColumns] = useState(8);
  const [rows, setRows] = useState(8);
  const [inputTile, setInputTile] = useState(64);
  const [inputColor, setInputColor] = useState('#000000');

  const tiles = useSelector<Rootstate, ITile[]>((state) => state.tiles.tiles);

  useEffect(() => {
    handleTileAmount();
    dispatch(setTilesAction(inputTile));
  }, [inputTile, rows, columns]);

  //calculate Tiles
  const calculateTiles = (rows: number, columns: number): number => {
    return rows * columns;
  };

  // change state of  column each change
  const handleRowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRows(parseInt(event.currentTarget.value));
  };

  // change state of  column each change
  const handleColumnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(parseInt(event.currentTarget.value));
  };

  //change amount of tiles
  const handleTileAmount = () => {
    return setInputTile(calculateTiles(columns, rows));
  };

  //change state of color picker
  const handleColorState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputColor(event.currentTarget.value);
  };

  //change color state of tile
  const handleTileState = (tileId: string, color: string) => {
    dispatch(SetColorAction(tileId, color));
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
            name="column"
            type="number"
            onChange={handleColumnChange}
            value={columns}
          />
        </Container>
        <Container>
          <input
            name="row"
            type="number"
            onChange={handleRowChange}
            value={rows}
          />
        </Container>
        <Container>
          <input type="color" value={inputColor} onChange={handleColorState} />
          <input type="text" value={inputColor} />
        </Container>
        <ButtonContainer>FILL</ButtonContainer>
        <ButtonContainer>SAVE</ButtonContainer>
        <ButtonContainer>CLEAR</ButtonContainer>
      </div>
      <GridContainer columnSize={columns} rowSize={rows}>
        {tiles.map((item) => {
          return (
            <TileDiv
              width={80 / columns}
              height={80 / rows}
              key={item.id}
              id={item.id}
              color={item.color}
              onClick={() => handleTileState(item.id, inputColor)}
            />
          );
        })}
      </GridContainer>
    </div>
  );
};

export default Grid;
