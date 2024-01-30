import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons} from "@expo/vector-icons"
import Checkbox from 'expo-checkbox'
import Button from '../component/Button'

export default function Signup() {
  const [isPasswordShown,setPasswordShow] = useState(false)
  const [isChecked,setIsChecked] = useState(false)
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,marginHorizontal:22}}>
        <View style={{marginVertical:22}}>
          <Text style={{fontSize:22,fontWeight:'bold',marginVertical:12}}>create account</Text>
          <Text style={{fontSize:16}}>Connect with your friend</Text>
        </View>
        <View style={{marginBottom:12}}>
          <Text style={{fontSize:16,fontWeight:400,marginVertical:8}}>
            Email Address
          </Text>
          <View style={{width:'100%',height:48,borderColor:'black',borderWidth:1,borderRadius:8,alignItems:'center',justifyContent:'center',paddingLeft:22}}>
            <TextInput placeholder='enter your email' keyboardType='email-address' style={{width:'100%'}}/>
          </View>


          <Text style={{fontSize:16,fontWeight:400,marginVertical:8}}>
            Telephone Number
          </Text>
          <View style={{width:'100%',height:48,borderColor:'black',borderWidth:1,borderRadius:8,alignItems:'center',paddingLeft:10,flexDirection:"row",justifyContent:'space-between'}}>
            <TextInput placeholder='+62' keyboardType='numeric' style={{width:'12%',borderRightWidth:1,height:"100%"}}/>
            <TextInput placeholder='enter your number' keyboardType='numeric' style={{width:'88%',borderRightWidth:1,height:"100%"}}/>
          </View>


          <Text style={{fontSize:16,fontWeight:400,marginVertical:8}}>
            Password
          </Text>
          <View style={{width:'100%',height:48,borderColor:'black',borderWidth:1,borderRadius:8,alignItems:'center',justifyContent:'center',paddingLeft:22}}>
            <TextInput placeholder='enter your password' style={{width:'100%'}} secureTextEntry={isPasswordShown}/>
          <TouchableOpacity style={{position:'absolute',right:2}} onPress={()=> setPasswordShow(!isPasswordShown)}>
            {isPasswordShown == true ? (
              <Ionicons name="eye-off" size={24}/>
            ):( <Ionicons name="eye" size={24}/>) }
            
          </TouchableOpacity>
          </View>


          <View style={{flexDirection:'row',marginVertical:6}}>
            <Checkbox style={{marginRight:8}} value={isChecked} onValueChange={setIsChecked} color={isChecked ? "purple" : undefined}/>
            <Text>I agree to the terms and condition</Text>
          </View>

          <Button title="sign up" filled style={{marginTop:18,marginBottom:4,color:"white"}}/>




        </View>
      </View>
    </SafeAreaView>
  )
}