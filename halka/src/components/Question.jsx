import React from 'react';
import { Header } from 'semantic-ui-react'

const Question = (props) => (
  <div>
    <Header style={{textAlign:"center", margin:"20px", marginBottom:"20px", fontSize:"1.5em"}} size='small' content={props.content} value={props.value}></Header>
  </div>
)

export default Question;