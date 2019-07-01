import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => (props.primary ? 'garnet' : 'gold')};
  color: ${props => (props.primary ? 'gold' : 'garnet')};
`

const Form = styled.form`
  background: ${props => (props.primary ? 'garnet' : 'gold')};
  color: ${props => (props.primary ? 'gold' : 'garnet')};
`

function StyledForm () {
  return (
  
    <div>          
 
    <Button>A normal button</Button>
    <Button primary>The primary button</Button>

    <Form primary>
      First name:
      <input type="text" name="firstname"></input><br />
      Last name:
      <input type="text" name="lastname"></input>
    </Form>

    


	</div>
  );
}

export default StyledForm;
