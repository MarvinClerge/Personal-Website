import React from 'react'
import AboutCard from './about-card'
import AboutMulti from './about-multi'

const AboutContainer = props => {
  function renderJourney(){
    const title = "My journey to becoming a developer"

    const content = [
      `I have loved coding even when I was young.
        My father gave me a "C++ for Dummies" book
        and I've had a passion for code ever since.`,
      `I read that book every day and followed various online tutorials
        creating small applications such as calculators.
        Later on, I learned Java, HTML, and JavaScript.`,
      `Recently I decided to make a career change
        to software development and went through
        Flatiron School's Software Engineering Immersive program.`
    ]

    return <AboutCard title={title} content={content} color='grey'/>
  }

  function renderHobbies(){
    const title = "Hobbies"

    const topics = [{
      title: "Gaming",
      content: `One of my favorite hobbies is gaming.
                I grew up playing JRPGs and Platformers.
                I always loved breaking down the logic and
                mathematics of each game to min-max my characters.`
    },{
      title: "Programming",
      content: `As with most developers, I love programming not just as work but as a hobby.
                Currently, my favorite activities are taking on code challenges and
                duplicating features from various sites.`
    },{
      title: "Think of a title",
      content: `When a piece of tech stops working or is broken I love to take it apart
                and learn what makes it tick and put it back together.
                One of my favorite teardowns was my first desktop computer.
                When I opened it up I was introduced to the wonderful world of building PCs.`
    }]

    return <AboutMulti title={title} topics={topics}/>
  }

  return(
    <div className="about-header">

      {renderJourney()}
      {renderHobbies()}

    </div>
  )
}

export default AboutContainer;
