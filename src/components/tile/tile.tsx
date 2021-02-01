import { ITile } from '../../interfaces/Tile';
import styled from 'styled-components';

export const TileDiv = styled.div<ITile>`
  background: ${(props) => props.color};
  width: 10vh;
  height: 10vh;
  border: 2px solid black;
`;
