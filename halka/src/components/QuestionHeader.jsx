import React from 'react'
import { Header } from 'semantic-ui-react'

const QuestionHeader = (props) => (
  <div>
    <Header size='small' style={{textAlign:"center", paddingTop:"15px", marginBottom:"20px", color:"#101340", backgroundColor:"#ffc700", height:"50px", fontWeight:"400"}}>Question {props.currentQuestion}/5</Header>
  </div>
)

export default QuestionHeader;