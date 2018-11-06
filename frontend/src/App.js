import React, { Component } from 'react';

import Page from './Page';

import './App.css';

import logo from './logo.png';
import sunearth from './background_image.png';

class App extends Component {
  render() {
    return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<img src={sunearth} className="sunearth" alt="sunearth" />

					<h1 className="App-title">Welcome to ECO-Blog!</h1>
				</header>
				<section>
					<Page/>
				</section>
      </div>
    );
  }
}

export default App;
