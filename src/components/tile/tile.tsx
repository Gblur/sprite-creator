import { ITile } from '../../interfaces/Tile';
import styled from 'styled-components';

export const TileDiv = styled.div<ITile>`
  background: ${(props) => props.color};
  width: ${(props) => props.width}vh;
  height: ${(props) => props.height}vh;
  outline: 2px solid black;
`;
