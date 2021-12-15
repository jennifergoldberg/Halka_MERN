import React from 'react'
import { Button } from 'semantic-ui-react'

const Response = (props) => (
  <div>
    <Button style={{width:"200px", marginBottom:"20px"}} onHover={{color:"#FFC700"}} content={props.content} value={props.value} basic />
  </div>
)

export default Response;