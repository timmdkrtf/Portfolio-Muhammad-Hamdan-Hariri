import React from 'react';
import styled from 'styled-components';

const ButtonCrosshair = (props) => {
  return (
    <StyledWrapper>
      <button className='orbitron-font cursor-target'>
        <a href="#personal-info" className='text-sm sm:text-xl py-2 px-[25px] sm:px-[35px] sm:py-[10px]'><span>{props.text}</span></a> 
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  a {
    position: relative;
    display: inline-block;
    border: 4px solid #BFC0D1;
    text-transform: uppercase;
    color: #ffffffff;
    text-decoration: none;
    font-weight: 500;
  }

  a::before {
    content: '';
    position: absolute;
    top: 15px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% - 30px);
    background-color: #16151D;
    transition: 0.3s ease-in-out;
    transform: scaleY(1);
  }

  a:hover::before {
    transform: scaleY(0);
  }

  a::after {
    content: '';
    position: absolute;
    left: 15px;
    top: -5px;
    height: calc(100% + 10px);
    width: calc(100% - 30px);
    background-color: #16151D;
    transition: 0.3s ease-in-out;
    transform: scaleX(1);
    transition-delay: 0.5s;
  }

  a:hover::after {
    transform: scaleX(0);
  }

  a span {
    position: relative;
    z-index: 3;
  }

  button {
    background-color: none;
    text-decoration: none;
    backdrop-filter: blur(2px);
    border: none;
  }`;

export default ButtonCrosshair;
