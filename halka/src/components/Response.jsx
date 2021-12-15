import React from 'react'
import { Button } from 'semantic-ui-react'

const Response = (props) => (
  <div>
    <Button id="response__options" style={{width:"200px", marginBottom:"20px"}} content={props.content} value={props.value} basic />
  </div>
)

export default Response;

