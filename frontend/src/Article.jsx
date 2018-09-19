import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Article extends Component {
	handlePageChange(t, c) {
    this.props.updatePage(t, c);
  }
  render() {
    return (
			<Router>
				<div>
					<br/>
					<Link to="/" onClick={() => this.handlePageChange("Home", "")}>
						Colapse Article
					</Link>
					<br/>
					<section>
						{this.props.content}
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
