import React from 'react'
import Response from './Response';

function Responses() {

  const selections = ['Not true at all', 'Rarely true', 'Sometimes true', 'Often true', 'True nearly all the time'];  

  return (
    <div>
      {selections.map((selection, index) => { return <Response key={index} content={selection} value={index+1} />})}
    </div>
  )
}

export default Responses;