import React from 'react'
import { Header } from 'semantic-ui-react'

const QuestionHeader = (props) => (
  <div>
    <Header size='medium' style={{textAlign:"center", paddingTop:"25px", marginBottom:"20px", color:"white", backgroundColor:"#101340", height:"75px", fontWeight:"400", borderTopLeftRadius:"5px", borderTopRightRadius:"5px"}}>Question {props.currentQuestion}/5</Header>
  </div>
)

export default QuestionHeader;