import React from 'react'
import { Header } from 'semantic-ui-react'

const QuestionHeader = (props) => (
  <div>
    <Header size='small'>Question {props.currentQuestion}/5</Header>
  </div>
)

export default QuestionHeader