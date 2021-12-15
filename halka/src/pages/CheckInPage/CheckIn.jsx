import React, { useState } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Responses from '../../components/Responses';
import QuestionHeader from '../../components/QuestionHeader';
import CheckInFooter from '../../components/CheckInFooter';
import Questions from '../../components/Questions';

function CheckIn() {

  const [responseCount, setResponseCount] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [currentCheckInQuestion, setCurrentCheckInQuestion] = useState(0)
  const valueArray = [];

  const handleQuestionCountUp = (props) => {
      setCurrentQuestion((prevState) => prevState + 1)
      setCurrentCheckInQuestion((prevState) => prevState + 1)
  }

  const handleQuestionCountDown = (props) => {
    setCurrentQuestion((prevState) => prevState - 1)
    setCurrentCheckInQuestion((prevState) => prevState - 1)
  }

  

  return (
  <Card style={{margin:"auto"}}>
    <QuestionHeader currentQuestion = {currentQuestion} nextQuestion = {handleQuestionCountUp}/>
    <Questions currentCheckInQuestion = {currentCheckInQuestion}/>
    <Responses />
    <CheckInFooter currentQuestion = {currentQuestion}incrementQuestionCount = {handleQuestionCountUp} decrementQuestionCount = {handleQuestionCountDown}/>
  </Card>
  )
}


export default CheckIn;