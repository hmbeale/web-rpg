import React from 'react';
import './style.css';

export class Button extends React.Component {
  render() {
    const btnConst = this.props.BtnElement;
    return (
        <button>{btnConst.name} </button>
    );
  }
}

class NavigationRow extends React.Component {
  render() {
    const rows = [];

    this.props.BtnElement.forEach((BtnElement) => {
      rows.push(
        <Button
          BtnElement={BtnElement}
          key={BtnElement.name} />
      );
    });

    return (
      <div> {rows} </div>
    );
  }
}


export class PlayerInput extends React.Component {
  render() {
    return (
      <div class = "PlayerInput">
      <NavigationRow BtnElement={this.props.BtnElement} />
      </div>
    );
  }
}

/*
export const NAVIGATION = [
  {name: 'left'},
  {name: 'straight'},
  {name: 'right'},
];
 */
