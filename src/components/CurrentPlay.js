import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
`

const Column = styled.div`
  flex: 1;
  flex-basis: 50%;
  width: 50%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
`


class CurrentPlay extends Component {
  render() {
    return (
      <Wrapper>
        <Column><Title>You:</Title> {this.props.play.you}</Column>
        <Column><Title>Oponent:</Title> {this.props.play.oponent}</Column>
      </Wrapper>
    );
  }
}

CurrentPlay.propTypes = {
  play: PropTypes.object
}

export default CurrentPlay;