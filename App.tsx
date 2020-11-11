import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { NativeRouter, Route, Link } from "react-router-native";

import Home from "./src/components/Home"
import GolfCard from "./src/components/GolfCard"
import reducers from "./src/reducers"
import GolfCoursesList from "./src/components/GolfCoursesList"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
      <View style={styles.container}>
      <Route exact path="/" component={GolfCoursesList} />
      <Route path="/course-name" component={GolfCard} />
      </View>
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 33,
    textAlign: "center"
  }
});

export default App;