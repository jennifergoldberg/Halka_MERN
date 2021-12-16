import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonAnimated = (props) => (
  <div>
    <Button animated size="massive" style={{backgroundColor:"#101340", color:"white", minWidth:'250px', marginTop: '20px', marginBottom: '20px'}}>
      <Button.Content visible>{props.text}</Button.Content>
      <Button.Content hidden>
        <Icon name={props.icon} />
      </Button.Content>
    </Button>
  </div>
)

export default ButtonAnimated