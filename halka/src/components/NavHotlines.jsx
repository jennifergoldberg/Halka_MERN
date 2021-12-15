import React from 'react'
import { Header, Button, Popup, Grid, Icon } from 'semantic-ui-react';

function NavHotlines() {
  return(
    <Popup trigger={<Button>Live Help</Button>} flowing hoverable wide style={{maxWidth: '320px'}} position='bottom center'>
      <Grid centered>
        <Grid.Column textAlign='center'>
          <Header as='h4'>National Suicide Prevention Lifeline</Header>
          <p>
            The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals in the United States.
          </p>
          <a href='tel:+1800-273-8255'><Button style={{backgroundColor: '#F28A2E', color:'#fff'}}>Call <Icon name='phone' style={{paddingLeft: '5px'}} /></Button></a>
          <a href='https://suicidepreventionlifeline.org/chat/' target='_blank' style={{paddingLeft: '10px'}}><Button style={{backgroundColor: '#F28A2E', color:'#fff'}}>Live Chat <Icon name='comments' style={{paddingLeft: '5px'}} /></Button></a>
        </Grid.Column>
      </Grid>
  </Popup>

    
  )
}

export default NavHotlines;