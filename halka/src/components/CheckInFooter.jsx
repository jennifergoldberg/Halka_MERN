import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const CheckInFooter = (props) => {
  // {!props.selectedResponse && 'disabled'}

  return(
    <div>
      {props.currentQuestion === 1 ? <></> : <Button icon>
        <Icon name='chevron circle left' onClick={props.decrementQuestionCount}/>
      </Button>}

      { props.currentQuestion === 5 ? 
        <Button 
          style={{backgroundColor:"#101340", color:"white"}}
          type='submit' 
          className={props.selectedResponse ? '' : 'disabled'}
          onClick={() => {
            props.handleSaveResponse();
            props.handleSubmit();
          }} >Submit</Button>
      : <Button icon className={props.selectedResponse ? '' : 'disabled'}>
        <Icon 
          name='chevron circle right' 
          onClick={() => {
            props.incrementQuestionCount(); 
            props.handleSaveResponse() 
          }}/>
      </Button> 
      }
    </div>
  )
}

export default CheckInFooter