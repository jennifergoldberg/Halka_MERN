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
    <div style={{textAlign:"right", margin:"10px", marginBottom:"20px"}}>
      {/* {props.currentQuestion === 1 ? <></> : <Button icon onClick={props.decrementQuestionCount}>
        <Icon name='chevron circle left'/>
      </Button>} */}

      { props.currentQuestion === 5 ? 
        <Link to={'/results'}><Button size='large'
          style={{backgroundColor:"#101340", color:"white", marginRight:"85px", marginTop:"10px", marginBottom:"20px"}}
          type='submit'
          className={props.responseSelected ? '' : 'disabled'}
          onClick={() => {
            props.handleSaveResponse();
            props.handleSubmit();
          }} >Submit</Button></Link>
      : <Button size='large' style={{marginTop:"10px", marginBottom:"20px", marginRight:"10px"}}
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