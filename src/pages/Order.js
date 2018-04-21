import React, { Component } from 'react';
// import {StyleSheet , Text , View , TextInput , TouchableOpacity,FlatList,Alert } from 'react-native';
import { StyleSheet, Text, View,Image,TextInput,Button,TouchableHighlight,FlatList,Alert } from 'react-native';
import {Actions} from 'react-native-router-flux';
import FormOrder from '../components/FormOrder';
import { CheckBox , Avatar } from 'react-native-elements'


export default class Order extends Component<{}>
{
  constructor(props){
        super(props);
        this.state = { checked:true,name:"",email:"",confirmPassword:"",password:"",jsonData :
          [
            { "id": 1, "name": "Pepsi"    ,status:"Buy",checked:false,logo:require('../images/pepsi.png')},
            { "id": 2, "name": "Chicken",status:"Buy",checked:false,logo:require('../images/chicken.png')},
            { "id": 3, "name": "Cheese"  ,status:"Buy",checked:false,logo:require('../images/cheese.png')},
            { "id": 4, "name": "Tea"  ,status:"Buy",checked:false,logo:require('../images/tea.png')}
          ],
          nameArray:[]
        };
      }

    MakeOrder(){
      var orderName = Object.assign([], this.state.jsonData)
      var order2 = [{}]
      for (let i=0;i<orderName.length;i++){
        if(orderName[i].checked==true){
          order2.push(orderName[i]);
          }
      }

    }

    CheckBoxSelect = (index, e) => {
      const user = Object.assign({}, this.state.jsonData[index]);
      const users = Object.assign([], this.state.jsonData);
      users[index] = user;
      users[index].checked=!users[index].checked
      if(users[index].checked){
        users[index].status="Done"
      }else{
        users[index].status="Buy"
      }
      this.setState({jsonData:users});
    }

    render() {
        return (
           <View style={styles.container}>
               <Text style={{textAlign: 'center',fontSize:25,fontWeight:'bold',color:'white',margin:10}}>
                Create Order
               </Text>
                <FlatList
          data={this.state.jsonData}
          renderItem={({item,index}) => <View  style={{borderBottomColor: 'gray',borderBottomWidth: 0.25,margin:10}}>

          <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Avatar
              medium
             source={item.logo}
             onPress={() => console.log("Works!")}
            activeOpacity={0.7}
           />
           <Text style={{fontSize:20,fontWeight:'bold',color:'white', margin:5}}>{item.name}</Text>
           </View>
          <CheckBox
          title={item.status}
           checked={item.checked}
           containerStyle={styles.checkBoxText}
           iconRight={true}
            onPress={this.CheckBoxSelect.bind(this,index)}/>
        </View>
        </View>
        }
        />

               <TouchableHighlight
    style={styles.submit}
    onPress={this.MakeOrder.bind(this)}
    underlayColor='#fff'>
      <Text style={[styles.submitText]}>Submit</Text>
      </TouchableHighlight>
           </View>

        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#455a64',
    },
    headerText:{
        color:'green',
      textAlign:'center',
      fontSize:30
    },
    submit:{
      margin:15,
      paddingTop:5,
      paddingBottom:5,
      paddingLeft:20,
      paddingRight:20,
      backgroundColor:'#A1887F',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
  },
  submitText:{
      color:'white',
      textAlign:'center',
      fontSize:20
  },
  checkBoxText:{
    backgroundColor:'#A1887F',
    justifyContent:"space-between"
  }
  });
