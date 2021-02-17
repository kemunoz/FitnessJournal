import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/Screens/IndexScreen';
import HomePage from './src/Screens/HomePage';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Home: HomePage
},
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Fitness'
    }
  });

export default createAppContainer(navigator);