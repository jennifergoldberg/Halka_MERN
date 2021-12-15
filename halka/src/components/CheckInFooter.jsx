import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const CheckInFooter = (props) => (
  <div>
    {props.currentQuestion === 1 ? <></> : <Button icon>
      <Icon name='chevron circle left' onClick={props.decrementQuestionCount}/>
    </Button>}

    { props.currentQuestion === 5 ? 
      <Button style={{backgroundColor:"#101340", color:"white"}} type='submit'>Submit</Button>
    : <Button icon>
      <Icon name='chevron circle right' onClick={props.incrementQuestionCount}/>
    </Button> 
    }
  </div>
)

export default CheckInFooter