import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View ,
  StatusBar ,
  TouchableOpacity ,
  AsyncStorage
} from 'react-native';

import Logo from '../components/Logo';
import FormReg from '../components/FormReg';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}>
{
  constructor()
    {
    super();
    this.state = { name:'' ,email: '' ,password: ''};
    }

        create ()
        {
          if (this.validateEmail(this.state.email))
          {
          AsyncStorage.setItem('name', this.state.name);
          AsyncStorage.setItem('email', this.state.email);
          AsyncStorage.setItem('password', this.state.password);
           alert("Name ,"+this.state.name +" Email ,"+this.state.email+" Password"+this.state.password)
          }
          else
          {
          alert("Not Valid Email");
          }

        }

        // When I press SignIn From Signup page
        goBack() { this.props.navigation.goBack() }
        ///////////////////////////////////////////
    validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
         {return false;}
    else { return  true; }
    }

  render() {
    return (
         <View  style={styles.container}>
          <Text style={styles.logoText}>Create New Account </Text>
         <FormReg onPress={this.create.bind(this)} onNameChangeText={(name) => this.setState({name:name})}
         onEmailChangeText={(email) => this.setState({email:email})}
         onPasswordChangeText={(password) => this.setState({password:password})}
         />

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}> Already Have An Account ? </Text>
          <TouchableOpacity onPress={this.goBack.bind(this)}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
  } ,
  logoText : {
    marginVertical: 20,
    fontSize:20,
    color:'rgba(255, 255, 255, 0.7)'
  }

});
