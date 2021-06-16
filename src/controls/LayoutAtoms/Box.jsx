import styled, { css } from 'styled-components'
import { size, colors } from './theme'
const gray = colors.grays[600]

const Box = styled.div(
  ({ padding = 2, background = gray, border = 0 }) =>
    css`
      padding: ${size[padding] || null};
      background-color:${background};
      border-width: ${size[border] || null};
      border-color: black;
      border-style: solid; 
    `
)

export default Box
