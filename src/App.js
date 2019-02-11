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
        opponent: 0
      },
      currentGame: {
        you: '',
        opponent: ''
      }
    }

    // Binding
    this._playTurn = this._playTurn.bind(this);
    this._opponentPlay = this._opponentPlay.bind(this);
    this._calculateScore = this._calculateScore.bind(this);
  }

  _calculateScore() {
    let playYou = this.state.currentGame.you;
    let playOpponent = this.state.currentGame.opponent;
    let youWon = winning[playYou][playOpponent];
    let opponentWon = winning[playOpponent][playYou];

    this.setState({
      score: {
        you: this.state.score.you + youWon,
        opponent: this.state.score.opponent + opponentWon
      }
    });
  }

  _opponentPlay(){
    /**
     * Play a random hand
     */
    return plays[Math.floor(Math.random() * plays.length)];
  }

  _playTurn(play) {
    /**
     * Show my play and let the opponent play
     */
    this.setState({
      currentGame: {
        you: play,
        opponent: this._opponentPlay()
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
