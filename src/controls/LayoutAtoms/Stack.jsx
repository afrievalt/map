import styled, { css } from 'styled-components'
import { space } from './theme'

const Stack = styled.div(
  ({ direction = 'horizontal', justify, align, gap }) =>
    css`
      display: flex;
      flex-direction: ${direction === 'vertical' ? 'column' : 'row'};
      justify-content: ${justify};
      align-items: ${align};
      > * + * {
        margin-left: ${direction === 'horizontal' ? space[gap] : null};
        margin-top: ${direction === 'vertical' ? space[gap] : null};
      }
    `
)

export default Stack
