/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, Button, FlatList, Dimensions, TouchableOpacity, Alert, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/Home';
import PersonsPage from './Pages/Persons';
import PostHomePage from './Pages/Contacts';
import UsersPage from './Pages/Users';
import GalleryComponent from './Pages/Gallery';
import ContactsPage from './Pages/Contacts';
import ContactForm from './Pages/ContactForm';
import CounterForm from './Pages/Counter';
import {Provider} from 'react-redux';
import {store} from './Redux/Store';
import UserForm from './Pages/UserForm';
import PostsPage from './Pages/Posts';
import PostForm from './Pages/PostForm';
import SubPosts from './Pages/SubPosts';
const Stack = createNativeStackNavigator();
function App(): JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Gallery" component={GalleryComponent} />
          <Stack.Screen name="Persons" component={PersonsPage} />
          <Stack.Screen name="Contacts" options={{ headerStyle: { backgroundColor: "#565656" }, headerShadowVisible: false, headerTintColor: 'white', headerTitleAlign: 'center' }} component={ContactsPage} />
          <Stack.Screen name="ContactForm" component={ContactForm} options={{ title: "Contact Form", headerStyle: { backgroundColor: "#565656" }, headerShadowVisible: false, headerTintColor: 'white', headerTitleAlign: 'center' }} />
          <Stack.Screen name="Users" component={UsersPage} options={{ title: "Users", headerStyle: { backgroundColor: "#565656" }, headerShadowVisible: false, headerTintColor: 'white', headerTitleAlign: 'center' }} />
          <Stack.Screen name="Counter" component={CounterForm} />
          <Stack.Screen name="UserForm" component={UserForm} options={{ title: "Users", headerStyle: { backgroundColor: "#565656" }, headerShadowVisible: false, headerTintColor: 'white', headerTitleAlign: 'center' }} />
          <Stack.Screen name="Posts" component={PostsPage} />
          <Stack.Screen name="PostForm" component={PostForm} />
          <Stack.Screen name="SubPosts" component={SubPosts} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
