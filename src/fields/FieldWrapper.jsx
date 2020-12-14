import Grid from '@material-ui/core/Grid';
import React from 'react';
import styled from 'styled-components'
const StyledGrid = styled(Grid)`
  padding: 8px;
`;

const FieldWrapper = ({
  children,
  ...rest
}) => {
  return (
    <StyledGrid item xs={12} {...rest}>
      {children}
    </StyledGrid>
  )
}

export default FieldWrapper;