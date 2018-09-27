import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ArticlePreviews from './ArticlePreviews.jsx'
import './Page.css';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Home",
			content: "",
		};
		this.updatePage = this.updatePage.bind(this);
	}
	updatePage(t, c) {
		this.setState(state => {
			title: t
			content: c
		});
	}
	render() {
		return (
			<body>
				<br/>
				<p className="Headtext">
					I wanted to make a blog to share my thoughts on the world,
					and get some experience making a small website! Enjoy!
				</p>
				<br/>
				<ArticlePreviews/>
			</body>
		);
	}
}

export default Page;
