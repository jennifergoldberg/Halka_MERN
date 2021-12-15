import React from 'react'
import { Header, Button, Popup, Grid } from 'semantic-ui-react';

function NavHotlines() {
  return(
    <Popup trigger={<Button>Show flowing popup</Button>} flowing hoverable>
      <Grid centered divided columns={3}>
        <Grid.Column textAlign='center'>
          <Header as='h4'>National Suicide Prevention Lifeline</Header>
          <p>
            The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals in the United States.
          </p>
          <Button>Call</Button>
          <Button>Live Chat</Button>
        </Grid.Column>
      </Grid>
  </Popup>
  )
}

export default NavHotlines;