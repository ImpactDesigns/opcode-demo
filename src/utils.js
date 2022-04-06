import { keyframes } from 'styled-components'

const spinRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const spinLeft = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`


export function changeSpinDirection(spinDir, dirSetter) {
    if (spinDir === 'right') {
        dirSetter(() => 'left')
    } else if (spinDir === 'left') {
        dirSetter(() => 'right')
    }
}

export function setAnimation(spinDir) {
    if (spinDir === 'right') {
        return spinRight
    } else if (spinDir === 'left') {
        return spinLeft
    }
}

export function determineSpeed(spinSpeed) {
    if (spinSpeed === 'fast') {
        return `1000ms`
    } else if (spinSpeed === 'slow') {
        return `5000ms`
    }
}

export function changeSpinSpeed(spinSpeed, speedSetter) {
    if (spinSpeed === 'fast') {
      speedSetter(() => 'slow')
    } else if (spinSpeed === 'slow') {
      speedSetter(() => 'fast')
    }
  }