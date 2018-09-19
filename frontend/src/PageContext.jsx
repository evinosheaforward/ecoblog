import React, { Component } from 'react';
import Page from './Page';

const PageContext = React.createContext();

export default PageContext;

class PageProvider {
	state = {
		title: "Home",
		content: "",
		update: (t, c) => {
			this.setState({
				title: t,
				content: c,
			})
		}
	}

	render() {
		return (
			<PageContext.Provider value={this.state}>
				{this.props.children}
			</PageContext.Provider>
		);
	}
}
