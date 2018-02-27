import React from 'react';
import './style.css';

import { PlayerInput } from './player-input.js'
//import { NAVIGATION } from './container.js'
import { PlayerView } from './player-view.js'

export class GameView extends React.Component {
  render() {
    return (
      <div class = "GameView">
      <PlayerView />
      <PlayerInput BtnElement = {NAVIGATION} />
      <PlayerInput BtnElement = {OPTIONS} />

      </div>
    );
  }
}

export const NAVIGATION = [
  {name: 'left'},
  {name: 'straight'},
  {name: 'right'},
];

export const OPTIONS = [
  {name: 'items'},
  {name: 'stats'},
];
