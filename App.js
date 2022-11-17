import React from 'react';
import { Text } from 'react-native';
// import Navigator from './routes/pageNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./Screens/HomePage/homePage.js";
import Articles from './Screens/Articles/articles';
import Activities from './Screens/Activities/activities';
import Consultation from './Screens/Consultation/consultation';
import GMUServices from './Screens/GMUServices/gmuServices';
import Login from './Screens/LoginPage/login';
import Signup from './Screens/SignupPage/signup';
import Profile from './Screens/Profile/profile';
import SelfAssessment from './Screens/SelfAssessments/selfAssessment.js';

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name='HomePage' component={HomePage}/>
    //     <Stack.Screen name='Articles' component={Articles}/>
    //     <Stack.Screen name='Activities' component={Activities}/>
    //     <Stack.Screen name='Consultation' component={Consultation}/>
    //     <Stack.Screen name='GMUServices' component={GMUServices}/>
    //     <Stack.Screen name='Login' component={Login}/>
    //     <Stack.Screen name='Signup' component={Signup}/>
    //     <Stack.Screen name='Profile' component={Profile}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <HomePage />
    // <Login />
    // <Consultation />
    // <Articles />
    // <Activities />
    <SelfAssessment />


  )
};

export default App;
