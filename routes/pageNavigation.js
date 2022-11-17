import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import HomePage from '../Screens/HomePage/homePage';
import Articles from '../Screens/Articles/articles';
import Activities from '../Screens/Articles/articles';
import Consultation from '../Screens/Consultation/consultation';
import GMUServices from '../Screens/GMUServices/gmuServices';
import Login from '../Screens/LoginPage/login';
import Signup from '../Screens/SignupPage/signup';

const screens = {
  HomePage: {
    screen: HomePage
  },
  Articles: {
    screen: Articles
  },
  Activities:{
    screen: Activities
  },
  Consultation:{
    screen: Consultation
  },
  GMUServices:{
    screen: GMUServices
  },
  Login:{
    screen: Login
  },
  Signup:{
    screen: Signup
  }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack)