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

              {/* <p>
                Everyone needs help sometimes – there’s no shame in it. In America, 1.5% of the population suffers from depression. In comparison, 13.6% of truck drivers suffer from some level of depression, a drastic difference from the rest of the population.
              </p>
              <p>
                If you’re suffering from depression, feeling hopeless or have suicidal thoughts, know that you’re not alone.
              </p>
              <p>
                Here’s a list of ways to get help: 
              </p>
              <p>
                National Suicide Prevention Lifeline, <a href='tel:+1800-273-8255'>1-800-273-TALK (8255)</a>, or <a href='https://suicidepreventionlifeline.org/chat/' target='_blank'>Live Online Chat</a>.
              </p>
              <p>
                <a href='tel:911'>Call 911</a>
              </p> */}
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