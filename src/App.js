import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Button } from 'opcode-demo-lib'
import { 
  changeSpinDirection, 
  setAnimation, 
  determineSpeed, 
  changeSpinSpeed 
} from './utils'
import './App.css';
import logo from './logo.svg';

const H1 = styled.h1`
  margin: 0px 0px 24px 0px;
  color: #586165;
  font-weight: 700;
  text-transform: uppercase;
`

const Image = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${props => props.animation}
`

function App() {
  const [spinDirection, setSpinDirection] = useState('right') 
  const [spinSpeed, setSpinSpeed] = useState('slow')
  const spin = setAnimation(spinDirection)
  const speed = determineSpeed(spinSpeed)
  
  return (
    <div className="App">
      <header className="App-header">
        <Image 
          src={logo} 
          alt={'logo'}
          animation={css`${spin} infinite ${speed} linear`}
        />
        <H1>Spin</H1>
        <div style={{  }}>
          <div style={{ padding: '20px' }}>
            <Button 
              label={(spinDirection === 'right' ? 'Left' : 'Right')}
              buttonType={'primary'} 
              className={'pry-btn'}
              onclick={() => changeSpinDirection(spinDirection, setSpinDirection)} 
            />
          </div>
          <div style={{padding: '20px' }}>
            <Button 
              label={(spinSpeed === 'slow' ? 'Fast' : 'Slow')} 
              buttonType={'secondary'} 
              className={'sry-btn'}
              onclick={() => changeSpinSpeed(spinSpeed, setSpinSpeed)}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;