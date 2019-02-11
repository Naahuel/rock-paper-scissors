import React, { Component } from 'react';
import PlaySelector from './components/PlaySelector';
import ScoreBoard from './components/ScoreBoard';
import CurrentPlay from './components/CurrentPlay';

const plays = ['rock', 'paper', 'scissors'];
const winning = {
  rock : {
    rock: 0,
    paper: 0,
    scissors: 1
  },
  paper : {
    rock: 1,
    paper: 0,
    scissors: 0
  },
  scissors : {
    rock: 0,
    paper: 1,
    scissors: 0
  }
}

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
    let youWon = 0;
    let oponentWon = 0;

    youWon     = winning[playYou][playOponent];
    oponentWon = winning[playOponent][playYou];

    this.setState({
      score: {
        you: this.state.score.you + youWon,
        oponent: this.state.score.oponent + oponentWon
      }
    });
  }

  _oponentPlay(){
    /**
     * Play a random hand
     */
    return plays[Math.floor(Math.random() * plays.length)];
  }

  _playTurn(play) {
    /**
     * Show my play and let the oponent play
     */
    this.setState({
      currentGame: {
        you: play,
        oponent: this._oponentPlay()
      }
    }, this._calculateScore)
  }

  render() {
    return (
      <div className="App">
        <ScoreBoard score={this.state.score} />
        <CurrentPlay play={this.state.currentGame} />
        <PlaySelector plays={plays} onPlay={this._playTurn} />
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/"  title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"  title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div> */}
      </div>
    );
  }
}

export default App;
