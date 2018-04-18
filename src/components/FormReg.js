import React, { Component } from 'react';
import {StyleSheet , Text , View , TextInput , TouchableOpacity } from 'react-native';

const FormReg = (props) => {

		return(
			<View style={styles.container}>

         <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.email.focus()}
							onChangeText={props.onNameChangeText}
              />

          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              ref={(input) => this.email = input}
              onSubmitEditing={()=> this.password.focus()}
							onChangeText={props.onEmailChangeText}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
							onChangeText={props.onPasswordChangeText}
              />

                <TouchableOpacity onPress={props.onPress} style={styles.button}>
                 <Text style={styles.buttonText}> Create Account </Text>
                </TouchableOpacity>
  		</View>
			)
	}


const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
   button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 12
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }


});
export default FormReg;
