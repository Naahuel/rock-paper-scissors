import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #FFF;
  text-shadow: 3px 4px 15px rgba(0, 0, 0, 0.25);
`

const Column = styled.div`
  flex: 1;
  flex-basis: 50%;
  width: 50%;
  text-align: center;
  font-size: 5rem;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
`


class ScoreBoard extends Component {
  render() {
    return (
      <Wrapper>
        <Column><Title>You:</Title> {this.props.score.you}</Column>
        <Column><Title>Opponent:</Title> {this.props.score.opponent}</Column>
      </Wrapper>
    );
  }
}

ScoreBoard.propTypes = {
  score: PropTypes.object
}

export default ScoreBoard;