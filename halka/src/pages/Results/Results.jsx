import React from 'react';
import { Link } from 'react-router-dom';
import ResultCard from '../../components/ResultCard';
import ButtonAnimated from '../../components/Button';
import Nav from '../../components/Nav';
import './Results.css'

const resultsGroup1 = [
  {
    header: 'Hotline',
    image: '/assets/start-hero.jpg',
    description: "In America, 1.5% of the population suffers from depression. In comparison, 13.6% of truck drivers suffer from some level of depression, a drastic difference from the rest of the population.",
    link: 'https://www.healthytruck.org/depression-in-truckers/'
  },
  {
    header: 'Hotline',
    image: '/assets/start-hero.jpg',
    description: "The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week in the United States.",
    link: 'https://suicidepreventionlifeline.org/'
  }, 
  {
    header: 'Hotline',
    image: '/assets/start-hero.jpg',
    description: "The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week in the United States.",
    link: 'https://suicidepreventionlifeline.org/'
  }
];

const resultsGroup2 = [
  {
    header: 'Deep Breathing',
    image: '/assets/activity-deepbreathing.jpg',
    description: "The 4-7-8 breathing technique, also known as “relaxing breath,” involves breathing in for 4 seconds, holding the breath for 7 seconds, and exhaling for 8 seconds.",
    link: 'https://www.medicalnewstoday.com/articles/324417'
  },
  {
    header: 'Deep Breathing',
    image: '/assets/activity-deepbreathing.jpg',
    description: "Feeling stressed, anxious or panicked? These tips and breathing exercises can help control your breathing. They can be done anywhere and will only take a few minutes to try.",
    link: 'https://giveusashout.org/get-help/resources/breathing-exercise-stress-and-anxiety/'
  },
  {
    header: 'Deep Breathing',
    image: '/assets/activity-deepbreathing.jpg',
    description: "If you're interested in trying breathing exercises to reduce stress or anxiety, or improve your lung function, we've got 10 different ones to sample. You may find that certain exercises appeal to you right away. Start with those so that the practice is more enjoyable.",
    link: 'https://www.healthline.com/health/breathing-exercise#takeaway'
  },
  {
    header: 'Reframe Your Thinking',
    image: '/assets/activity-reframe.jpg',
    description: "Because truckers have a lot of responsibilities, stress relief sure comes in handy sometimes.",
    link: 'https://www.truck-drivers-money-saving-tips.com/stress-relief.html'
  },
  {
    header: 'Reframe Your Thinking',
    image: '/assets/activity-reframe.jpg',
    description: "Here are 8 ways for truck drivers to reduce stress. Driving a truck is stressful. Driving a tanker truck adds another layer of complexity that many fellow truck drivers do not understand.",
    link: 'https://drive4highway.com/8-ways-for-truck-drivers-to-reduce-stress/'
  },
  {
    header: 'Reframe Your Thinking',
    image: '/assets/activity-reframe.jpg',
    description: "Aside from providing time and support for drivers in need of personal help, as a fleet manager, there is a lot you can do to help reduce the stressors in the office, on the route, and in the vehicle.",
    link: 'https://www.worktruckonline.com/10152551/6-tips-to-reduce-work-truck-driver-stress'
  },
]

const resultsGroup3 = [
  {
    header: 'Move',
    image: '/assets/activity-move.jpg',
    description: "Overcoming challenges to a healthy trucker lifestyle on the road-----For drivers new to the industry, the over-the-road lifestyle may generate concerns regarding nutrition, sedentary hours, weight management and the development of health conditions over time.",
    link: 'https://www.worktruckonline.com/10152551/6-tips-to-reduce-work-truck-driver-stress'
  },
  {
    header: 'Move',
    image: '/assets/activity-move.jpg',
    description: "Whether you drive an small inner-city delivery truck or a huge semi-trailer up and down the length of Australia, most drivers have something in common - poor health.",
    link: 'https://exerciseright.com.au/exercise-tips-truck-drivers/'
  },
  {
    header: 'Move',
    image: '/assets/activity-move.jpg',
    description: "Being a commercial truck driver can be a rewarding occupation, but it can also be one that causes some unhealthy living habits. The hours of inactivity are a given, but a poor diet can cause many truckers to develop a wide variety of health issues. As a result, truckers run the risk of developing health problems if they do not find ways to be more active and healthy on the road.",
    link: 'https://www.healthline.com/health/breathing-exercise#takeaway'
  },
  {
    header: 'Eating on the Road',
    image: '/assets/activity-eating.jpg',
    description: "It's no secret that convenience is key for truck drivers, which is why when it comes to eating and meals, they often rely on fast food options. However, what truck drivers eat on the road and what they put in their bodies is just as important as the fuel they put in their truck.",
    link: 'https://schneiderjobs.com/blog/grocery-list-for-truck-drivers'
  },
  {
    header: 'Eating on the Road',
    image: '/assets/activity-eating.jpg',
    description: "Your truck stop is not a special occasion, it is part of your regular meal plan. Your truck stop is not a special occasion or a treat, it is part of your regular meal plan. Healthy eating can be a challenge for many people but toss in trying to do it while driving a truck across the country and it can seem next to impossible.",
    link: 'https://safetydriven.ca/resource/eating-on-the-road-nutrition-for-truck-drivers/'
  },
  {
    header: 'Eating on the Road',
    image: '/assets/activity-eating.jpg',
    description: "Like a truck, a body requires fuel, good fuel, to run properly. A constant diet of greasy fast food and sugary soda would soon add up to health issues for anybody, especially truck drivers who are seated in one place so much of the time.",
    link: 'https://www.truckingtruth.com/guide-pages/chapter9/food-and-eating.html '
  },
]


function Results(props) {
  let arrayFromValue = null;
  let randomIndex = 1;

  const calculateResults = () => {
    if (props.value === 4 || props.value === 5) {
      arrayFromValue = resultsGroup1;
      randomIndex = (Math.floor(Math.random() * resultsGroup1.length))
    }
    if (props.value === 2 || props.value === 3) {
      arrayFromValue = resultsGroup2;
      randomIndex = (Math.floor(Math.random() * resultsGroup2.length))
    }
    if (props.value === 1) {
      arrayFromValue = resultsGroup3;
      randomIndex = (Math.floor(Math.random() * resultsGroup3.length))
    }
  }
  
  calculateResults();

  console.log('This is your average value', props.value)
  console.log('This is the array from Value', arrayFromValue);
  console.log('This is the random index', randomIndex);

  return(
    <>
      <Nav />
      <div id="results">
        <div className="results__header">
          <h1>Here is one thing you can focus on today based on how you're feeling.</h1>
        </div>

        <div className="results__resources">
          <ResultCard header={arrayFromValue[randomIndex].header} image={arrayFromValue[randomIndex].image} description={arrayFromValue[randomIndex].description} link={arrayFromValue[randomIndex].link} />
        </div>

        <div className='results__start-over'>
          <Link to={'/start'}><ButtonAnimated text='Start Over' icon='refresh' /></Link>
        </div>
      </div>
    </>
  )
}

export default Results;