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