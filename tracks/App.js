import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';

const StackNav = createStackNavigator();
const BottomTabNav = createBottomTabNavigator();

function TrackFlow() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="TrackList" component={TrackListScreen} />
      <StackNav.Screen name="TrackDetail" component={TrackDetailScreen} />
    </StackNav.Navigator>
  );
}

function LoginFlow() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Signin" component={SigninScreen} />
      <StackNav.Screen name="Signup" component={SignupScreen} />
    </StackNav.Navigator>
  );
}

function MainFlow() {
  return (
    <BottomTabNav.Navigator>
      <BottomTabNav.Screen name="TrackList" component={TrackFlow} />
      <BottomTabNav.Screen name="Account" component={AccountScreen} />
      <BottomTabNav.Screen name="TrackCreate" component={TrackCreateScreen} />
    </BottomTabNav.Navigator>
  );
}


function RootStack() {

  const notSignedIn = true
  return (
      notSignedIn ? (
        <StackNav.Navigator>
          <StackNav.Screen name="LoginFlow" options={{ headerShown: false }} component={LoginFlow} />
        </StackNav.Navigator>
      ) : (
        <StackNav.Navigator>
          <StackNav.Screen name="MainFlow" options={{ headerShown: false }} component={MainFlow} />
        </StackNav.Navigator>
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return <NavigationContainer style={styles.container}>{RootStack()}</NavigationContainer>;
}