import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { PlayerInput } from './player-input.js'
//import { NAVIGATION } from './player-input.js'
import { GameView } from './container.js'
//import { NAVIGATION } from './container.js'
import { PlayerView } from './player-view.js'




ReactDOM.render(
  <GameView />,
  document.getElementById('root')
);
