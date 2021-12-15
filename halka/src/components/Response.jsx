import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const Response = (props) => {
  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Button style={{width:"200px", height:"45px", margin:"10px"}} content={props.content} value={props.value} basic onClick={(e) => props.handleResponseClick(e.target.value)} />
  </div>
  )
}

export default Response;

