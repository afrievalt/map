import styled, { css } from 'styled-components'
import { size, colors } from './theme'
const gray = colors.grays[600]

const Center = styled.div(
  ({ padding = 2, background = gray, border = 0 }) =>
    css`
      box-sizing: content-box;
      margin-left: auto;
      margin-right: auto;
      max-width: 120ch;
      xdisplay: flex;
      align-items: center;
      flex-direction: column;
    `
)

export default Center
