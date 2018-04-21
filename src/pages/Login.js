import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View ,
  StatusBar ,
  TouchableOpacity,
  Alert
} from 'react-native';

import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}>
{
     constructor() {
     super();
     this.state = { email: '' ,password: ''};
   }
   testOrder()
   {
     this.props.navigation.navigate('Order')
   }
  login () {
     email="abdo@yahoo.com"
     password="123456"
     if (this.validateEmail(this.state.email)){
      if (this.state.email==email && this.state.password==password)
      {
              this.props.navigation.navigate('Order')
      }
   else
    {
         alert("Email | password incorrect");
    }
  }
           //Alert.alert("Email ::" + this.state.email + " , Password ::" + this.state.password);
           // this.props.navigation.navigate('Order')
           }
  signup() {
             this.props.navigation.navigate('Signup')
	            }
  validateEmail = (text) => {
           let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
          if(reg.test(text) === false)
             {return false;}
          else { return  true; }
              }
  render() {
    return (
    		 <View  style={styles.container}>
    		<Logo/>
    		<FormLogin onPress={this.login.bind(this)} onEmailChangeText={(email) => this.setState({email:email})}
        onPasswordChangeText={(password) => this.setState({password:password})} />
    		<View style={styles.signupTextCont}>
					<Text style={styles.signupText}> Do not have an account yet ? </Text>
					<TouchableOpacity onPress={this.signup.bind(this)}><Text style={styles.signupButton}> Register</Text></TouchableOpacity>
				</View>
    		</View>
    	)
  }

}
const styles = StyleSheet.create({

 container :
 {
  backgroundColor:'#455a64' ,
   flex:1,
  alignItems:'center',
  justifyContent :'center',
 },
   signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  } ,
   signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  } ,
  signupButton: {
  	color:'#ffffff',
  	fontSize:17,
  	fontWeight:'500'
  }

});
