import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ArticlePreviews from './ArticlePreviews.jsx'

class Page extends Component {
  render() {
		return (
			<body>
				<br/>
					Basic Proof of concept.
				<br/>
				<ArticlePreviews/>
			</body>
		);
	}
}

export default Page;
