/* loading React with jsx */
// import React, {Component}  from 'react';
// import ReactDOM from 'react-dom';

// import Content from './components/content';
// import './css/style';

// class App extends Component{
// 	render(){
// 		return (
// 			<Content />
// 		)
// 	}
// }

// ReactDOM.render(<App />, document.querySelector('#container'));

/* loading pure html */
import html from './container';
import './css/style';

function initLoadHtml() { return html }

document.querySelector('#container').insertAdjacentHTML( 'beforeend', initLoadHtml() );