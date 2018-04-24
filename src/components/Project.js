import React from 'react'
import ProjectCard from './ProjectCard'

// screenshot frontend/master/screen1

const projectData = [
  {
    name: 'Coding Website',
    date: 'March 2018',
    frontend: 'https://github.com/MarvinClerge/Coding-Website',
    backend: 'https://github.com/MarvinClerge/Coding-Website-Backend',
    description: 'An application that allows users to create, evaluate and take code challenges in sandboxed environment using Javascript ES5.',
    videoID: 'NICcslMG1Mg',
    tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'AceEditor', 'JS-Intrepreter'],
    features: [
      {Login: 'In top right of the home page is the login section. Here users can create or login to an account.'}
      {Code: 'After clicking the “Start Coding” button users can write in the editor on the left.'},
      {Challenges: 'In the CHALLENGES tab of the menu users can take on challenges created by other users. If logged in users can create challenges. When running a challenge the OUTPUT tab will change to only allow running the challenge. Users can switch back to normal by resetting the editor or loading code.'}
    ]
  },
  {
    name: 'GoodEats',
    date: 'February 2018',
    frontend: 'https://github.com/MarvinClerge/GoodEats',
    backend: 'https://github.com/MarvinClerge/GoodEats-Backend',
    description: 'An application that allows users to discover new restaurants and bars based on their current location.',
    videoID: 'my3Oa415Fkk',
    tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'GooglePlaces API'],
    features: [
      {Login: 'In the top right corner of the home page is the login section. Here a user can create an account or login. Once logged in a user will have the ability to favorite and comment on locations.'}
      {Places: 'After a search in the main page the results will appear as cards below. Click on a card to be taken to the locations page and view more information.'},
      {Comment: 'Users can comment on a location in its page.'}
    ]
  },
  {
    name: 'Calibre',
    date: 'January 2018',
    frontend: 'https://github.com/MarvinClerge/Calibre',
    backend: 'https://github.com/MarvinClerge/Calibre-Backend',
    description: 'Calibre is a web application that allows users to search, play, and save music and videos to a playlist.',
    videoID: 'SPIsVHKzBV4',
    tech: ['Ruby on Rails', 'PostgreSQL', 'JavaScript'],
    features: [
      {Login: 'In the top right of the navbar the user will find the login input. This site only needs a username to login. After typing the username the user’s previously saved playlist will be loaded. Once logged in a user any modifications to the user’s playlist will now be automatically saved.'}
      {Playlist: 'When a user is playing media content they can manage their playlist on the right side of the screen. A user can play, shuffle, repeat, remove, change order, play previous and play next on all media content within their playlist.'},
      {Comment: 'If a user is logged in they can like a media item by clicking the fire button, and/or comment on media item.'}
    ]
  }
]

const Project = () => {
  function mapProjects(data){
    return data.map((project, index) => {
      return <ProjectCard key={index} {...project} />
    })
  }

  return (
    <div className='project'>
      <p>projects</p>
      {mapProjects(projectData)}
    </div>
  )
}

export default Project
