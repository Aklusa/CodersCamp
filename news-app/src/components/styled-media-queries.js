import { css } from 'styled-components';

const sizes = {
    giant: 1170,
    big: 1000,
    desktop: 992,
    tablet: 756,
    middle: 520,
    phablet: 400,
    phone: 376
  }
  
const media = Object.keys(sizes).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `
    return accumulator
  }, {})

export default media;