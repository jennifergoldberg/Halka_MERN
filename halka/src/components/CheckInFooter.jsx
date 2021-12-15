import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const CheckInFooter = (props) => {
  // const routeChange = () => {
  //   let history = useHistory();
  //   let path = `/results`;
  //   history.pushState(path)
  // }

  return(
    <div>
      {/* {props.currentQuestion === 1 ? <></> : <Button icon onClick={props.decrementQuestionCount}>
        <Icon name='chevron circle left'/>
      </Button>} */}

      { props.currentQuestion === 5 ? 
        <Link to={'/results'}><Button 
          style={{backgroundColor:"#101340", color:"white"}}
          type='submit'
          className={props.responseSelected ? '' : 'disabled'}
          onClick={() => {
            props.handleSaveResponse();
            props.handleSubmit();
          }} >Submit</Button></Link>
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