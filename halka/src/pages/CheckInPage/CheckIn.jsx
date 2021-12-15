import React, { useState } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Responses from '../../components/Responses';

function CheckIn() {

  const [responseCount, setResponseCount] = useState(0)
  const valueArray = [];

  // handleResponseClick = (value) => {
  //   valueArray.push(value)
  //   setResponseCount(responseCount + )
  // }
  

  return (
    // <div>
    //   <h1>CheckIn</h1>
    //   <Responses 
    //     // onResponseClick={handleResponseClick()}
    //   />
    // </div>
  <Card style={{margin:"auto"}}>
    <Responses />
  </Card>
  )
}


export default CheckIn;