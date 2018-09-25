import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Text from 'react-format-text';

import './Article.css';

class Article extends Component {
	handlePageChange(t, c) {
    this.props.updatePage(t, c);
  }
  render() {
		var content = this.props.content;
    return (
			<Router>
				<p>
					<br/>
					<Link to="/" onClick={() => this.handlePageChange("Home", "")}>
						Colapse Article
					</Link>
					<section>
						<br/>
						{content}
					</section>
				</p>
			</Router>
    );
  }
}

export default Article;
