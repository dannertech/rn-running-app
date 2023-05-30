import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {StyleSheet, View, Text} from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as AuthProvider} from './src/context/AuthContext.js';
import { setNavigator } from './src/navigationRef';


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
    
  })
});

const AppContainer = createAppContainer(switchNavigator);

export default () => <AuthProvider><SafeAreaProvider><AppContainer ref={(navigator) => setNavigator(navigator)}/></SafeAreaProvider></AuthProvider>

// const App = () => {
//   return(
//     <SafeAreaProvider>
//       <AppContainer />
//     </SafeAreaProvider>
//   )
// };

// export default App;