import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Page from './Page';

class App extends Component {
  render() {
    return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
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
