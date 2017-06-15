import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

import './css/style';

class App extends Component{
	render(){
		return (
			<div className="content">
				<h1>Welcome React</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));