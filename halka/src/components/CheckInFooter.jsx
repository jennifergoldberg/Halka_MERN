import React, { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'

const CheckInFooter = (props) => {


  return(
    <div>
      {/* {props.currentQuestion === 1 ? <></> : <Button icon onClick={props.decrementQuestionCount}>
        <Icon name='chevron circle left'/>
      </Button>} */}

      { props.currentQuestion === 5 ? 
        <Button 
          style={{backgroundColor:"#101340", color:"white"}}
          type='submit'
          onClick={() => {
            props.handleSaveResponse();
            props.handleSubmit();
          }} >Submit</Button>
      : <Button 
          icon className={props.responseSelected ? '' : 'disabled'}
          onClick={() => {
            props.incrementQuestionCount(); 
            props.handleSaveResponse() 
          }}>
        <Icon 
          name='chevron circle right' 
          />
      </Button> 
      }
    </div>
  )
}

export default CheckInFooter