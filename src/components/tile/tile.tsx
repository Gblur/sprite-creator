import React, { FC, useState } from 'react';
import styles from './tile.module.css'
import { ITile } from '../../interfaces/Tile';
import styled from 'styled-components';
import { idText } from 'typescript';



export const TileDiv = styled.div<ITile>`
  background: ${props => props.color};
  width: 10vh;
  height: 10vh;
  border: 2px solid black;
`
