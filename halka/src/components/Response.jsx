import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const Response = (props) => {
  return (
  <div>
    <Button style={{width:"200px", marginBottom:"20px", marginLeft:"40px"}} content={props.content} value={props.value} basic onClick={(e) => props.handleResponseClick(e.target.value)} />
  </div>
  )
}

export default Response;

