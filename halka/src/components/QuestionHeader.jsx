import React from 'react'
import { Header } from 'semantic-ui-react'

const QuestionHeader = (props) => (
  <div>
    <Header size='small' style={{textAlign:"center", paddingTop:"15px", marginBottom:"20px", color:"white", backgroundColor:"#101340", height:"50px", fontWeight:"400", borderRadius:"5px, 5px, 0px, 0px"}}>Question {props.currentQuestion}/5</Header>
  </div>
)

export default QuestionHeader;