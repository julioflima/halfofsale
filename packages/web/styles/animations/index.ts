import { keyframes } from 'styled-components'

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const pulsate = keyframes`
  0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
  50% {opacity: 1.0;}
  100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
`

export const fade = (primaryColor, secondaryColor) => keyframes`
  0% {
  fill:${primaryColor};
  }
  50% {
  fill:${secondaryColor};
  }
  100%{
    fill:${primaryColor};
  }
`

export const liquid = (finalPosition) => keyframes`
  0% {
    left:  ${finalPosition};
    transition: all .1s cubic-bezier(0,-0.86, 0.98,-0.02);
  }
  50%{
    left: -6rem;
    transform: scale(1.05) rotate(45deg);
    border-top-right-radius: 10%;
  }
  100%{
    left: ${finalPosition};
  }
`

export const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`
export const slideBottom = keyframes`
 0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(1rem);
  }
`
export const wavingForward = (variationX, variationY) => keyframes`
  0% { transform:translate(0%,0%) }
  50% {  transform:translate(${variationX},${variationY})}
  100% {  transform:translate(0%,0%) }
`
export const wavingBack = (variationX, variationY) => keyframes`
  0% { transform:translate(${variationX},${variationY})) }
  50% {  transform:translate(0%,0%)}
  100% {  transform:translate(${variationX},${variationY})) }
`
