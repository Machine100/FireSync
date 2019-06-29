import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => (props.primary ? 'black' : 'white')};
  color: ${props => (props.primary ? 'white' : 'black')};
`

function StyledForm () {
  return (
  
    <div>          
 
    <Button>A normal button</Button>
    <Button>A normal button</Button>
    <Button primary>The primary button</Button>
    


	</div>
  );
}

export default StyledForm;
