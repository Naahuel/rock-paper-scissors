import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThrowIcon from './ThrowIcon';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0;
  display:flex;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.2);
  background-color: rgba(255, 255, 255, 0.2);
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  border: 0;
  background-color: transparent;
  border-left: ${props => props.center ? "1px solid black" : "0"};
  border-right: ${props => props.center ? "1px solid black" : "0"};
  flex: 1;
  flex-basis: 33%;
  width: 33%;
  font-size: 1rem;
  margin: 0;
  padding: 1rem;
  border-radius: 0;
  outline: 0;
  transition: all 0.2s ease-out;

  &:active {
    transform: scale(1.1);
  }
`;


class PlaySelector extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.plays.map(play => {
          return <Button key={play} onClick={this.props.onPlay.bind(this, play)}><ThrowIcon throw={play} /></Button>
        })}
      </Wrapper>
    );
  }
}

PlaySelector.propTypes = {
  onPlay: PropTypes.func,
  plays: PropTypes.array
}

export default PlaySelector;