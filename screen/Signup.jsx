import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons} from "@expo/vector-icons"
import Checkbox from 'expo-checkbox'
import Button from '../component/Button'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [isPasswordShown,setPasswordShow] = useState(false)
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [customerName,setCustomerName] = useState("")
  const [address,setAddress] = useState("")
  const [mobilePhone,setMobilePhone] = useState("")

  const ketikUsername = (event) => {
    const text = event.nativeEvent.text;
    setUsername(text);
  };

  const ketikPassword = (event) => {
    const text = event.nativeEvent.text
    setPassword(text)
  }


  const ketikCustomerName = (event) => {
    const text = event.nativeEvent.text
    setCustomerName(text)
  }

  const ketikAddress = (event) => {
    const text = event.nativeEvent.text
    setAddress(text)
  }

  const ketikMobilePhone = (event) => {
    const text = event.nativeEvent.text
    setMobilePhone(text)
  }


  const kirimRegister = async () => {
    try {
      await axios.post('http://10.10.100.210:8088/api/auth/register', {
        username: username,
        password: password,
        customerName:customerName,
        address:address,
        mobilePhone:mobilePhone
      });
      navigation.navigate('Login')
    } catch (error) {
      console.error(error);
      alert("gagal register")
    }
  }


  return (
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
    <SafeAreaView style={{flex:1,height:800}}>
      <View style={{flex:1,marginHorizontal:22}}>
        <View style={{marginVertical:22}}>
          <Text style={{fontSize:22,fontWeight:'bold',marginVertical:12}}>create account</Text>
          <Text style={{fontSize:16}}>Connect with your friend</Text>
        </View>
        <View style={{marginBottom:12}}>
          <Text style={{fontSize:16,fontWeight:400,marginVertical:8}}>
            Username
          </Text>
          <View style={{width:'100%',height:48,borderColor:'black',borderWidth:1,borderRadius:8,alignItems:'center',justifyContent:'center',paddingLeft:22}}>
            <TextInput placeholder='enter your username' style={{width:'100%'}} onChange={ketikUsername} value={username}/>
          </View>


          <Text style={{fontSize:16,fontWeight:400,marginVertical:8}}>
            Customer Name
          </Text>
          <View style={{width:'100%',height:48,borderColor:'black',borderWidth:1,borderRadius:8,alignItems:'center',justifyContent:'center',paddingLeft:22}} onChange={ketikCustomerName} value={customerName}>
            <TextInput placeholder='enter your name' style={{width:'100%'}}/>
          </View>


          <Text style={{fontSize:16,fontWeight:400,marginVertical:8}}>
            Telephone Number
          </Text>
          <View style={{width:'100%',height:48,borderColor:'black',borderWidth:1,borderRadius:8,alignItems:'center',paddingLeft:10,flexDirection:"row",justifyContent:'space-between'}}>
            <TextInput placeholder='+62' keyboardType='numeric' style={{width:'12%',borderRightWidth:1,height:"100%"}}/>
            <TextInput placeholder='enter your number' keyboardType='numeric' style={{width:'88%',borderRightWidth:1,height:"100%"}} onChange={ketikMobilePhone} value={mobilePhone}/>
          </View>

          <Text style={{fontSize:16,fontWeight:400,marginVertical:8}}>
            Address
          </Text>
          <View style={{width:'100%',height:48,borderColor:'black',borderWidth:1,borderRadius:8,alignItems:'center',justifyContent:'center',paddingLeft:22}} onChange={ketikAddress} value={address}>
            <TextInput placeholder='enter your Address' style={{width:'100%'}}/>
          </View>


          <Text style={{fontSize:16,fontWeight:400,marginVertical:8}}>
            Password
          </Text>
          <View style={{width:'100%',height:48,borderColor:'black',borderWidth:1,borderRadius:8,alignItems:'center',justifyContent:'center',paddingLeft:22}}>
            <TextInput placeholder='enter your password' style={{width:'100%'}} secureTextEntry={isPasswordShown} onChange={ketikPassword} value={password}/>
          <TouchableOpacity style={{position:'absolute',right:2}} onPress={()=> setPasswordShow(!isPasswordShown)}>
            {isPasswordShown == true ? (
              <Ionicons name="eye-off" size={24}/>
            ):( <Ionicons name="eye" size={24}/>) }
            
          </TouchableOpacity>
          </View>

          <Button title="sign up" filled style={{marginTop:240,marginBottom:4,color:"white",width:'100%'}} onPress={kirimRegister}/>




        </View>
      </View>
    </SafeAreaView>
      </ScrollView>
  )
}