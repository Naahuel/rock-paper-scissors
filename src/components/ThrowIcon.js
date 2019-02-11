import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: inline-block;
`
const Icon = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

class ThrowIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: false
    }
  }

  static getDerivedStateFromProps(props) {
   return {
     icon: props.throw ? require(`../svg/${props.throw}.svg`) : false
   }
  }

  render() {
    return (
      <Wrapper className={this.props.className}>
        {this.state.icon && <Icon src={this.state.icon} alt={this.props.throw} />}
      </Wrapper>
    );
  }
}

ThrowIcon.propTypes = {
  className: PropTypes.string,
  throw: PropTypes.string
}

export default ThrowIcon;