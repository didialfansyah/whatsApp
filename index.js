/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import App from './src/App';
import {name as appName} from './app.json';

const MyApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
