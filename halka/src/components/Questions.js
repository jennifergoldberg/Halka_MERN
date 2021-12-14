import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const question = [
  'I am a question',
].join(' ')

const QuestionCard = () => (
  <Card>
    <Card.Content header={question} />
    <Card.Content description={question} />
    <Card.Content extra>
      <Icon name='user' />4 Friends
    </Card.Content>
  </Card>
)

export default QuestionCard