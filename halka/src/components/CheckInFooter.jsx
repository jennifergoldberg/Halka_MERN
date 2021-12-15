import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const CheckInFooter = (props) => (
  <div>
    <Button icon>
      <Icon name='chevron circle left' />
    </Button>
    <Button icon>
      <Icon name='chevron circle right' />
    </Button>
  </div>
)

export default CheckInFooter