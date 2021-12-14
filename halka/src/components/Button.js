import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonAnimated = (props) => (
  <div>
    <Button animated style={{backgroundColor:"#101340", color:"white"}}>
      <Button.Content visible>{props.text}</Button.Content>
      <Button.Content hidden>
        <Icon name={props.icon} />
      </Button.Content>
    </Button>
  </div>
)

export default ButtonAnimated