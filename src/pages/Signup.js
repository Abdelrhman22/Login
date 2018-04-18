import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View ,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import FormReg from '../components/FormReg';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> 
{
        goBack() {
                  Actions.pop();
                  }
  render() {
    return (
         <View  style={styles.container}>
          <Text style={styles.logoText}>Create New Account </Text>
         <FormReg> </FormReg>     

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}> Already Have An Account ? </Text>
          <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
