import React from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import Router from './Router';


function App() {
  return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
  );
}

export default App;

