import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Article from './Article.jsx'

const blogs = [
	{
		title: "My first blog",
		content: "Contents of blog",
	},
	{
		title: "My second blog",
		content: "better content"
	},
]

class ArticlePreviews extends Component {
	render() {
		var articles = blogs.map( ( {title, content} ) =>
			<h2>
				<br/>
				<ArticlePreview
					updatePage={this.props.updatePage}
					title={title}
					content={content}/>
				<br/>
				<br/>
			</h2>
		);
		return (
      <div>{articles}</div>
		);
	}
}

export default ArticlePreviews;

class ArticlePreview extends Component {
	constructor(props) {
		super(props);
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
