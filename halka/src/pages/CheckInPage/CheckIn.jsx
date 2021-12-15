import React, { useState } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Responses from '../../components/Responses';
import QuestionHeader from '../../components/QuestionHeader';
import CheckInFooter from '../../components/CheckInFooter';
import Questions from '../../components/Questions';

const responseArray = [];

function CheckIn() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [currentCheckInQuestion, setCurrentCheckInQuestion] = useState(0)
  const [selectedResponse, setSelectedResponse] = useState(null);

  const handleQuestionCountUp = (props) => {
      setCurrentQuestion((prevState) => prevState + 1)
      setCurrentCheckInQuestion((prevState) => prevState + 1)
  }

  const handleQuestionCountDown = (props) => {
    setCurrentQuestion((prevState) => prevState - 1)
    setCurrentCheckInQuestion((prevState) => prevState - 1)
  }

  const handleResponseClick = (responseValue) => {
    setSelectedResponse(responseValue);
    console.log('Clicked response val', responseValue);
  }

  const handleSaveResponse = () => {
    responseArray.push(selectedResponse);
    console.log('Response array', responseArray)
  }

  const handleSubmit = () => {
    const convertedArray = responseArray.map((element) => +(element));
    const avgValue = (convertedArray.reduce((a,b) => a + b)/5);
    console.log(Math.floor(avgValue));
  }

  return (
  <Card style={{margin:"auto"}}>
    <QuestionHeader currentQuestion={currentQuestion} nextQuestion={handleQuestionCountUp}/>
    <Questions currentCheckInQuestion={currentCheckInQuestion}/>
    <Responses handleResponseClick={handleResponseClick} />
    <CheckInFooter currentQuestion={currentQuestion}incrementQuestionCount={handleQuestionCountUp} decrementQuestionCount={handleQuestionCountDown} handleSaveResponse={handleSaveResponse} selectedResponse={selectedResponse} handleSubmit={handleSubmit} />
  </Card>
  )
}


export default CheckIn;