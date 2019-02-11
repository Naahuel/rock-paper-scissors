import React, { Component } from 'react';
import PlaySelector from './components/PlaySelector';
import ScoreBoard from './components/ScoreBoard';
import CurrentPlay from './components/CurrentPlay';

const plays = ['rock', 'paper', 'scissors']

class App extends Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      score: {
        you: 0,
        oponent: 0
      },
      currentGame: {
        you: '',
        oponent: ''
      }
    }

    // Binding
    this._playTurn = this._playTurn.bind(this);
    this._oponentPlay = this._oponentPlay.bind(this);
    this._calculateScore = this._calculateScore.bind(this);
  }

  _calculateScore() {
    let playYou = this.state.currentGame.you;
    let playOponent = this.state.currentGame.oponent;

    let indexYou = plays.indexOf(playYou);
    let indexOponent = plays.indexOf(playOponent);

    let youWon = 0;
    let oponentWon = 0;

    if( indexOponent > indexYou ) {
      oponentWon = 1;
    } else if ( indexYou > indexOponent ) {
      youWon = 1;
    }

    this.setState({
      score: {
        you: this.state.score.you + youWon,
        oponent: this.state.score.oponent + oponentWon
      }
    });
  }

  _oponentPlay(){
    return plays[Math.floor(Math.random() * plays.length)];
  }

  _playTurn(play) {
    /**
     * Show my play and let the oponent play
     */
    let oponentPlay = this._oponentPlay();
    console.log('You played: ', play);
    console.log('Oponent played: ', oponentPlay);

    this.setState({
      currentGame: {
        you: play,
        oponent: oponentPlay
      }
    }, this._calculateScore)
  }

  render() {
    return (
      <div className="App">
        <ScoreBoard score={this.state.score} />
        <CurrentPlay play={this.state.currentGame} />
        <PlaySelector plays={plays} onPlay={this._playTurn} />
      </div>
    );
  }
}

export default App;
