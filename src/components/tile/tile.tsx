import { ITile } from '../../interfaces/Tile';
import styled from 'styled-components';

export const TileDiv = styled.div<ITile>`
  background: ${(props) => props.color};
  width: 10vh;
  height: 10vh;
  outline: 2px solid black;
`;
