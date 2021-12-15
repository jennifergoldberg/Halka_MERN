import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

function ResultCard({ header, description, image, link }) {
  return(
    <Card>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{header}</Card.Header>
            <Card.Description>
              {description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={link} target="_blank">
              <Icon name='linkify' />
              Read more
            </a>
          </Card.Content>
        </Card>
  )
}

export default ResultCard;