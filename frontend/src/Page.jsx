import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Article from './Article.jsx'
import ArticlePreviews from './ArticlePreviews.jsx'
import PageContext from './Page.jsx';

class Page extends Component {
  render() {
		return (
			<body>
				<Route exact path="/" component={ArticlePreviews}/>
				<Route exact path="/blogs" component={Article}/>
			</body>
	  );
	}
}

export default Page;

// <PageContext.Consumer>
// 	{(context) => {

//    <Route path={`/blogs/${context.title}`} component={Article}/>

// 	}}
// </PageContext.Consumer>
