import React from 'react'
import { Card } from 'semantic-ui-react'

const Response = () => (
  <Card.Group>
    <Card fluid color='gray' header='Not true at all'/>
    <Card fluid color='gray' header='Rarely true' />
    <Card fluid color='gray' header='Sometimes true' />
    <Card fluid color='gray' header='Often true' />
    <Card fluid color='gray' header='True nearly all the time' />
  </Card.Group>
)

export default Response