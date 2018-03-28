const technology = {
  react: {
    name: "React",
    use: "Used to create frontend, manage application state, user interface, DOM manipulation, and fetching data from backend API."
  },
  javascript: {
    name: "JavaScript",
    use: "Used to create frontend, DOM manipulation, user interface, and fetching data from backend API."
  },
  rails: {
    name: "Ruby on Rails",
    use: "Used to create backend JSON API."
  },
  postgres: {
    name: "PostgreSQL",
    use: "Used to store and manage user information."
  },
  ace: {
    name: "AceEditor",
    use: "Used for live syntax checking and highlighting of JavaScript code."
  },
  interpreter: {
    name: "JS-Interpreter",
    use: "Used to evaluate JavaScript code in a sandboxed environment."
  },
  places: {
    name: "GooglePlaces",
    use: "Used to obtain and display information about restaurants and bars to users."
  }
}

const coding = {
  name: "Coding Website",
  date: "March 2018",
  description: "An application that allows users to create, evaluate and take code challenges in sandboxed environment using Javascript ES5.",
  tech: [technology.react, technology.rails, technology.postgres, technology.ace, technology.interpreter],
  frontend: "https://github.com/MarvinClerge/Coding-Website",
  backend: "https://github.com/MarvinClerge/Coding-Website-Backend",
  features: [{
      title: "Login",
      description: "In top right of the home page is the login section. Here users can create or login to an account."
    },{
      title: "Code",
      description: "After clicking the “Start Coding” button users can write in the editor on the left."
    },{
      title: "Menu",
      description: "User can open the side menu by clicking the ≡ button. There are 3 tabs in the menu OUTPUT, CHALLENGES and MY CODE."
    },{
      title: "Output",
      description: "In the OUTPUT tab of the menu users can run the code, reset the editor, and if logged in save the code."
    },{
      title: "My Code",
      description: "In the MY CODE tab of the menu if logged in users can view, load and delete their code."
    },{
      title: "Challenges",
      description: "In the CHALLENGES tab of the menu users can take on challenges created by other users. If logged in users can create challenges. When running a challenge the OUTPUT tab will change to only allow running the challenge. Users can switch back to normal by resetting the editor or loading code."
    }],
  images: [
    "https://raw.githubusercontent.com/MarvinClerge/Coding-Website/master/screen1.png",
    "https://raw.githubusercontent.com/MarvinClerge/Coding-Website/master/screen2.png",
    "https://raw.githubusercontent.com/MarvinClerge/Coding-Website/master/screen3.png"
  ],
  videoId: "NICcslMG1Mg"
}

const goodeats = {
  name: "GoodEats",
  date: "Febuary 2018",
  description: "An application that allows users to discover new restaurants and bars based on their current location.",
  tech: [technology.react, technology.rails, technology.postgres, technology.places],
  frontend: "https://github.com/MarvinClerge/GoodEats",
  backend: "https://github.com/MarvinClerge/GoodEats-Backend",
  features: [{
      title: "Search",
      description: "In the center of the home pageis the search section. Users can use this to search for nearby locations by distance in meters and type of location."
    },{
      title: "Login",
      description: "In the top right corner of the home page is the login section. Here a user can create an account or login. Once logged in a user will have the ability to favorite and comment on locations."
    },{
      title: "Places",
      description: "After a search in the main page the results will appear as cards below. Click on a card to be taken to the locations page and view more information."
    },{
      title: "Comment",
      description: "Users can comment on a location in its page."
    }],
  images: [
    "https://raw.githubusercontent.com/MarvinClerge/GoodEats/master/screen1.png",
    "https://raw.githubusercontent.com/MarvinClerge/GoodEats/master/screen2.png"
  ],
  videoId: "my3Oa415Fkk"
}

const calibre = {
  name: "Calibre",
  date: "January 2018",
  description: "Calibre is a web application that allows users to search, play, and save music and videos to a playlist.",
  tech: [technology.rails, technology.postgres, technology.javascript],
  frontend: "https://github.com/MarvinClerge/Calibre",
  backend: "https://github.com/MarvinClerge/Calibre-Backend",
  features: [{
      title: "Search",
      description: "In the center of the navbar, there will be a large search bar. A user can use this to search for videos and music by title. A new page with then render containing the user’s search results."
    },{
      title: "Login",
      description: "In the top right of the navbar the user will find the login input. This site only needs a username to login. After typing the username the user’s previously saved playlist will be loaded. Once logged in a user any modifications to the user’s playlist will now be automatically saved."
    },{
      title: "Switch Sections",
      description: "Under the navbar, there will be two tab buttons that allows the user to switch between the playing content and the browsing content."
    },{
      title: "Playlist",
      description: "When a user is playing media content they can manage their playlist on the right side of the screen. A user can play, shuffle, repeat, remove, change order, play previous and play next on all media content within their playlist."
    },{
      title: "Like & Comment",
      description: "If a user is logged in they can like a media item by clicking the fire button, and/or comment on media item."
    },{
      title: "Browsing and Suggestions",
      description: "On each media item card a user can click play to view the media content. If the user clicks the + button it will be added to their playlist. The user can only add the media item to their playlist once."
    }],
  images: [
    "https://raw.githubusercontent.com/MarvinClerge/Calibre/master/screen1.png",
    "https://raw.githubusercontent.com/MarvinClerge/Calibre/master/screen2.png"
  ],
  videoId: "SPIsVHKzBV4"
}

const projects = [coding, goodeats, calibre]

export default projects
