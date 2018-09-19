import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PageContext from './Page.jsx';

class Article extends Component {
	static displayName = "Article";
  render() {
    return (
			<Router>
				<div>
					<Link onClick={this.forceUpdate} to="/">
						Back to Home
					</Link>
					<h2>
						MY TITLE
					</h2>
					<section>
						MY OPINION
					</section>
				</div>
			</Router>
    );
  }
}

export default Article;

// <PageContext.Consumer>
// 	 {(context) => {
//
//   <button	onClick={context.update("Home", "")}>
//   </button>
// 		<h2>
// 			{context.title}
// 		</h2>
// 		<section>
// 			{context.content}
// 		</section>
//   }}
// </PageContext.Consumer>
