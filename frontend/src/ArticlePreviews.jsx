import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PageContext from './Page.jsx';

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
	static displayName = "ArticlePreviews";
	render() {
		var articles = blogs.map( ( {title, content} ) =>
			<h2>
				<ArticlePreview
					title={title}
					content={content}/>
			</h2>
		);
		return (
      <div>{articles}</div>
		);
	}
}

export default ArticlePreviews;

class ArticlePreview extends Component {
  render() {
		var title = this.props.title;
		var content = this.props.content;
    return (
			<Router>
				<Link onClick={this.forceUpdate} to="/blogs">
					{title}
				</Link>
			</Router>
		);
  }
}
// <PageContext.Consumer>
// 	{(context) => {
//  <button	onClick={context.update(
// 		title,
// 		content)}>
//    <Link to={`/blogs/${title}`}>
// 	</button>
// 	}}
// </PageContext.Consumer>
