import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
    
    componentWillMount() {
        console.ignoredYellowBox = ['Setting a timer'];
        const config = {
            apiKey: 'AIzaSyDQt9bDAuJ9UO-I0vp2vB8miRD_jYRsiFE',
            authDomain: 'manager-edf83.firebaseapp.com',
            databaseURL: 'https://manager-edf83.firebaseio.com',
            projectId: 'manager-edf83',
            storageBucket: 'manager-edf83.appspot.com',
            messagingSenderId: '664025211515'
        };

        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}

export default App;
