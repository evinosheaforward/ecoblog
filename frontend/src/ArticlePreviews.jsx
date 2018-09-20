import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

import Article from './Article.jsx';
import blogs from './blogs.jsx';

import './Article.css';

class ArticlePreviews extends Component {
	render() {
		var articles = blogs.map( ( {title, content} ) =>
		<div>
			<br/>
			<ArticlePreview
					updatePage={this.props.updatePage}
					title={title}
					content={content}/>
			<br/>
		</div>
	);
		return (
      <div>
				<br/>
				{articles}
			</div>
		);
	}
}

export default ArticlePreviews;

class ArticlePreview extends Component {
	constructor(props) {
		super(props);
	}
	handlePageChange(t, c) {
    this.props.updatePage(t, c);
  }
	render() {
		var title = this.props.title;
		var content = this.props.content;
    return (
			<div>
				<Router>
					<Link
						onClick={() => this.handlePageChange(
            	title,
            	content)}
						to={`/blogs/${title}`}>
						{title}
					</Link>
				</Router>
					<Route
						exact path={`/blogs/${title}`}
						component={() => <Article
							updatePage={this.props.updatePage}
							title={title}
							content={content} />}
					/>
				</div>
		);
  }
}
