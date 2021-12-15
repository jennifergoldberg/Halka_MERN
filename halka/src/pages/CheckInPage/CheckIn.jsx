import React, { useState } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Responses from '../../components/Responses';
import QuestionHeader from '../../components/QuestionHeader';
import CheckInFooter from '../../components/CheckInFooter';

function CheckIn() {

  const [responseCount, setResponseCount] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const valueArray = [];

  const handleQuestionCountUp = (props) => {
      setCurrentQuestion((prevState) => prevState + 1)
  }

  const handleQuestionCountDown = (props) => {
    setCurrentQuestion((prevState) => prevState - 1)
  }

  return (
    // <div>
    //   <h1>CheckIn</h1>
    //   <Responses 
    //     // onResponseClick={handleResponseClick()}
    //   />
    // </div>
  <Card style={{margin:"auto"}}>
    <QuestionHeader currentQuestion = {currentQuestion}/>
    <Responses />
    <CheckInFooter currentQuestion = {currentQuestion}incrementQuestionCount = {handleQuestionCountUp} decrementQuestionCount = {handleQuestionCountDown}/>
  </Card>
  )
}


export default CheckIn;