/* loading React with jsx */
import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

import './css/style';

class App extends Component{
	render(){
		return (
			<div className="content">
				<h1>Welcome ReactJS</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));

/* loading html */
// import html from './container';
// import './css/style';

// function initLoadHtml() {
// 	return html;
// }

// document.querySelector('#container').insertAdjacentHTML( 'beforeend', initLoadHtml() );