import React from 'react'
import Question from './Question'
import { Header } from 'semantic-ui-react'

function Questions(props) {
  const checkInQuestions = ['I can deal with whatever comes my way.', 'I try see the humorous side of things when I am faced with problems.', 'Having to cope with stress makes me stronger.', 'I feel that I can handle all my current responsibilites and meet all my deadlines.', 'I feel rested and can think clearly.'];

  return (
    <div>
      <Header size='small' style={{textAlign:"center", fontWeight:"400", margin:"10px"}}>Over the last week, how much do you agree with the following statement?</Header>
      <Question content={checkInQuestions[props.currentCheckInQuestion]}/>
    </div>
  )
}

export default Questions;