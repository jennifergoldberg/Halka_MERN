import React from 'react'
import Response from './Response';

function Responses(props) {

  const selections = ['Not true at all', 'Rarely true', 'Sometimes true', 'Often true', 'True nearly all the time'];  

  return (
    <div>
      {selections.map((selection, index) => { return <Response key={`response${index}`} content={selection} value={index+1} handleResponseClick={props.handleResponseClick} />})}
    </div>
  )
}

export default Responses;