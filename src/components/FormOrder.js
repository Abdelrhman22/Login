import React, { Component } from 'react';
import {StyleSheet, Text , View , TextInput , TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

	const FormOrder = (props) => {
		return(
          		<Text style={styles.Text}> Create Order </Text>
			)
	}

const styles = StyleSheet.create({

  Text : {
  	marginVertical: 15,
		marginHorizontal:120,
  	fontSize:20,
  	color:'rgba(0, 0, 0, 0.7)'
  }
});
export default FormOrder;
