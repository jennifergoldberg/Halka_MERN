import React from 'react';
import { Header } from 'semantic-ui-react'

const Question = (props) => (
  <div>
    <Header size='medium' content={props.content} value={props.value}></Header>
  </div>
)

export default Question;