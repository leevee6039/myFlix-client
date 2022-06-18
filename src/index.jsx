import React from 'react';
import ReactDOM from 'react-dom';

// Import statement to indicate that you need to bundle './index.scss'
import './index.scss';

//Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <div className="my-flix">
        <h1> 🎭 Hello React!! &#128640;</h1>
        <div className="main">
          <div className="ellipse"></div>
          <div className="ellipse2"></div>
          <div className="ellipse3"></div>
          <div className="ball"></div>
        </div>
      </div>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
