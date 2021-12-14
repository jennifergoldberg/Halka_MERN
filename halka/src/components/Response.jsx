import React from 'react'
import { Button } from 'semantic-ui-react'

const Response = (props) => (
  <div>
    <Button onHover={{color:"#F2D775"}} content={props.text} basic />
  </div>
)

export default Response;