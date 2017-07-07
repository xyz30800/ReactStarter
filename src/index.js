/*** loading React with jsx - Start ***/

import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

import Content from './components/content';
import './css/style';

class App extends Component{
	render(){
		return (
			<Content />
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));

/*** loading React with jsx - End ***/

/*** loading pure html - Start ***/

// import html from './container';
// import './css/style';

// function initLoadHtml() { return html }

// document.querySelector('#container').insertAdjacentHTML( 'beforeend', initLoadHtml() );

/*** loading pure html - End ***/

/*** Customize JS code - Start ***/