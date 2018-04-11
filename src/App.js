import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBicVyOLuadtaHMDVkdEN7GKklPbANPn5o",
      authDomain: "inspector-mobile-2403d.firebaseapp.com",
      databaseURL: "https://inspector-mobile-2403d.firebaseio.com",
      projectId: "inspector-mobile-2403d",
      storageBucket: "inspector-mobile-2403d.appspot.com",
      messagingSenderId: "60818930595"
    };
    firebase.initializeApp(config);
  }

  render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
