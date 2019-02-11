import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import ThrowIcon from './ThrowIcon';


const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  display: flex;
`

const Column = styled.div`
  flex: 1;
  flex-basis: 50%;
  width: 50%;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
`

const enterLeft = keyframes`
  from {
    transform: rotate(0deg) translateX(-100%);
  }

  to {
    transform: rotate(33deg) translateX(0%);
  }
`;

const enterRight = keyframes`
  from {
    transform: rotate(0deg) translateX(100%);
  }

  to {
    transform: rotate(-33deg) translateX(0%);
  }
`;


const YouThrowIcon = styled(ThrowIcon)`
  transform: rotate(33deg);
  animation: ${enterLeft} 500ms;
`

const OpponentThrowIcon = styled(ThrowIcon)`
  transform: rotate(-33deg);
  animation: ${enterRight} 500ms;
`

class CurrentPlay extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.play.you && <Column>
          <YouThrowIcon throw={this.props.play.you} />
        </Column>}
        {this.props.play.opponent && <Column>
          <OpponentThrowIcon throw={this.props.play.opponent} />
        </Column>}
      </Wrapper>
    );
  }
}

CurrentPlay.propTypes = {
  play: PropTypes.object
}

export default CurrentPlay;