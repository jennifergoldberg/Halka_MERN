import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const question = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const QuestionCard = () => (
  <Card>
    <Card.Content header='About Amy' />
    <Card.Content question={question} />
    <Card.Content extra>
      <Icon name='user' />4 Friends
    </Card.Content>
  </Card>
)

export default QuestionCard