import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Article.css';

class Article extends Component {
	handlePageChange(t, c) {
    this.props.updatePage(t, c);
  }
  render() {
		var content = this.props.content;
    return (
			<Router>
				<section>
					<br/>
					<LinkContainer to="/" onClick={() => this.handlePageChange("Home", "")}>
						<Button>
							Colapse Article
						</Button>
					</LinkContainer>
					<br/>
					<p className="ArticleContent">
						{content}
					</p>
				</section>
			</Router>
    );
  }
}

export default Article;
