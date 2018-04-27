import React from 'react'
import ProjectCard from './ProjectCard'

// screenshot frontend/master/screen1

const projectData = [
  {
    name: 'Coding Website',
    date: 'March 2018',
    frontend: 'https://github.com/MarvinClerge/Coding-Website',
    backend: 'https://github.com/MarvinClerge/Coding-Website-Backend',
    description: `An application that allows users to create, evaluate
      and take code challenges in sandboxed environment using Javascript ES5.`,
    videoID: 'NICcslMG1Mg',
    tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'AceEditor', 'JS-Intrepreter'],
    features: {
      Auth: `Users can create and log in to accounts.
        When logged in users can save, edit, load and delete their code.
        Users can also create challenges for others to take on.`,
      Code: `Users can type code using the text editor.
        When the output tab is selected in the menu.
        Users can execute and reset their code.`,
      Challenges: `Users can initiate challenges from the challenge tab.
        After starting a challenge the editor will be changed to contain a function.
        Users must complete the function and pass the test designated by the challenge.
        When logged in the completion of the challenge will be saved.`
    }
  },
  {
    name: 'GoodEats',
    date: 'February 2018',
    frontend: 'https://github.com/MarvinClerge/GoodEats',
    backend: 'https://github.com/MarvinClerge/GoodEats-Backend',
    description: 'An application that allows users to discover new restaurants and bars based on their current location.',
    videoID: 'my3Oa415Fkk',
    tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'GooglePlaces API'],
    features: {
      Auth: `Users can create and log in to accounts.
        When logged in users will be able to view, add and remove places from their favorites.
        Users can also comment on an individual place.`,
      Places: `After choosing a category,
        users will be shown nearby places provided by the GooglePlaces API.
        Each place includes a dynamically produced page with further
        information and comments by users.`,
      Comment: `Users can comment on an individual place.`
    }
  },
  {
    name: 'Calibre',
    date: 'January 2018',
    frontend: 'https://github.com/MarvinClerge/Calibre',
    backend: 'https://github.com/MarvinClerge/Calibre-Backend',
    description: 'Calibre is a web application that allows users to search, play, and save music and videos to a playlist.',
    videoID: 'SPIsVHKzBV4',
    tech: ['Ruby on Rails', 'PostgreSQL', 'JavaScript'],
    features: {
      Auth: `Users can create and log in to accounts.
        When logged in all changes made to a user's playlist will be saved.
        Users will also be able to like and comment on media.`,
      Playlist: `Users have the option of adding and removing media from their playlist.
        The option to rearrange the media manually or by shuffling.
        Users can also go to the next or previous media by using the
        corresponding controls.`,
      'Like & Comment': `When logged in users can like and comment on media.`
    }
  }
]

const Project = () => {
  function mapProjects(data){
    return data.map((project, index) => {
      return <ProjectCard key={index} {...project} />
    })
  }

  return (
    <section className='project'>
      <h1>Recent Projects</h1>
      {mapProjects(projectData)}
    </section>
  )
}

export default Project
