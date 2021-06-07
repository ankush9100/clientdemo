import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import { Provider } from "react-redux";
import  store  from './src/redux/store'
export default function App() {
  return (
    <Provider store={store}> 
         <HomeScreen/>
    </Provider>
 
  )
}
