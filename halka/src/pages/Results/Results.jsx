import React from 'react';

import ResultCard from '../../components/ResultCard';
import ResultCardHotline from '../../components/ResultCardHotline';

const resultsGroup1 = [{
  header: 'lorem',
  image: '/assets/start-hero.jpg',
  description: 'lorem' ,
  link: ''
}]

function Results(props) {
  // const calculateResults = (props) => {
  //   if (props.value === 1 || props.value === 2) {
  //     const Math.random
  //   }
  // }

  return(
    <div id="results">
      <div className="results__header">
        <h1>Results</h1>
      </div>

      <div className="results__resources">
        <ResultCardHotline />
        <ResultCard header={resultsGroup1[0].header} image={resultsGroup1[0].image} description={resultsGroup1[0].description} link={resultsGroup1[0].link} />
      </div>
    </div>
  )
}

export default Results;