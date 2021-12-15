import React from 'react';
import { Header } from 'semantic-ui-react'

const Question = (props) => (
  <div>
    <Header style={{textAlign:"center", margin:"10px", marginBottom:"20px"}} size='medium' content={props.content} value={props.value}></Header>
  </div>
)

export default Question;