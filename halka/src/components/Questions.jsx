import React from 'react'
import Question from './Question'
import { Header } from 'semantic-ui-react'

function Questions(props) {
  const checkInQuestions = ['I can deal with whatever comes my way.', 'I try see the humorous side of things when I am faced with problems.', 'Having to cope with stress makes me stronger.', 'I feel that there are too many deadlines in my work that are difficult to meet.', 'I deny or ignore problems in the hope that they will go away.'];

  return (
    <div>
      <Header size='small'>Over the last month, how much do you agree with the following statement?</Header>
      <Question content={checkInQuestions[props.currentCheckInQuestion]}/>
    </div>
  )
}

export default Questions;