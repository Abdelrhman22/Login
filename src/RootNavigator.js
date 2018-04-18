import { StackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Order from './pages/Order';


const RootNavigator = StackNavigator({

  Login: {
    screen: Login,
    navigationOptions :  {
    title : 'Login'
                          }
  },
  Signup: {
    screen: Signup,
    navigationOptions :  {
    title : 'Signup'
                          }
  },
  Order: {
    screen: Order,
    navigationOptions :  {
    title : 'Order'
                          }
  }

});

export default RootNavigator;
