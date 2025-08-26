import React from 'react';
import styled from 'styled-components';

const ButtonSlice = (props) => {
  return (
    <StyledWrapper>
      <button className='orbitron-font'> {props.text}
        <span />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    border: none;
    display: block;
    position: relative;
    padding: 7px 24px;
    font-size: 18px;
    background: transparent;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    color:  #ffffff;
    z-index: 1;
    font-weight: 400;
  }

  button span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
    border: 4px solid #BFC0D1;
  }

  button span::before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: #16151D;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.3s;
  }

  button:hover span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: #BFC0D1;
  }

  button:hover {
    color: #16151D;
    font-weight: 500;
  }

  button:active span::before {
    background: #BFC0D1;
  }`;

export default ButtonSlice;
