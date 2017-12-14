import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store.js'

import Main from './src/Main';

function App(){
	return(
		<Provider store= {store}>
			<Main />
		</Provider>
	)
}

export default App;
