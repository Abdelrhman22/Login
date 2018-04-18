import React, { Component } from 'react';
import {StyleSheet , Text , View , TextInput , TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import FormOrder from '../components/FormOrder';


export default class Order extends Component<{}>
{
  render(){
    return(
      	<Text style={styles.Text}> Create Order Page . </Text>
     )
   }
}
const styles = StyleSheet.create({

  Text : {
  	marginVertical: 15,
		marginHorizontal:100,
  	fontSize:18,
  	color:'rgba(0, 0, 0, 0.7)'
  }
});
