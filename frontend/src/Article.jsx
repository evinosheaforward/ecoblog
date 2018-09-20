import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './Article.css';

class Article extends Component {
  render() {
		var paragraphs = this.props.content.map( ( par ) =>
				<p>
					{par}
				</p>
		);
    return (
			<Router>
				<div>
					<br/>
					<Link to="/" onClick={() => this.handlePageChange("Home", "")}>
						Colapse Article
					</Link>
					<section>
						<br/>
						{paragraphs}
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

// </PageContext.Consumer>
