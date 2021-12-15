import React, { useState } from 'react'
import Responses from '../../components/Responses';

function CheckIn(props) {

  const [responseCount, setResponseCount] = useState(0)

  

  return (
    <div>
      <h1>CheckIn</h1>
      <Responses 
        onClick={() => setResponseCount(responseCount + props.value)}
      />
      {console.log(responseCount)}
    </div>

  )
}


export default CheckIn;