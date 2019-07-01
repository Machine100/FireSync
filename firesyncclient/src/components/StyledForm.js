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
      
      <form id="login-form" primary >
        <div>
          Email:
          <input type="email" id="login-email" required />
        </div>
        <div>
 	  	   Password:
           <input type="password" id="login-password" required />
        </div>
        <Button id="login-button"> Submit </Button>
      </form>


	</div>
  );
}

export default StyledForm;
