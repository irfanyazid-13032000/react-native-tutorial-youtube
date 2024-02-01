import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons} from "@expo/vector-icons"
import Button from '../component/Button'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import {storeToken,deleteToken} from '../slice/authSlice'
import { useNavigation } from '@react-navigation/native';



export default function Login() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [isPasswordShown,setPasswordShow] = useState(false)
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const token = useSelector((state)=>state.auths.token)

  useEffect(()=>{
    console.log(token);
    if (token) {
      navigation.navigate('TabNavigate')
    }
  },[token])

  const ketikUsername = (event) => {
    const text = event.nativeEvent.text;
    setUsername(text);
  };
  // roniRGaEDE
  // paperoani

  const ketikPassword = (event) => {
    const text = event.nativeEvent.text
    setPassword(text)
  }

  const kirimRequest = async () => {
    try {
      const response = await axios.post('http://10.10.100.210:8088/api/auth/login', {
        username: username,
        password: password
      });
      dispatch(storeToken(response.data.data))
      navigation.navigate('TabNavigate')

    } catch (error) {
      console.error(error);
      alert("username atau password salah")
    }
  };
  

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,marginHorizontal:22}}>
        <View style={{marginVertical:22}}>
          <Text style={{fontSize:22,fontWeight:'bold',marginVertical:12}}>Login</Text>
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

          <Button title="Login" filled style={{marginTop:150,marginBottom:4,color:"white",width:'100%'}} onPress={kirimRequest}/>

        </View>
      </View>
    </SafeAreaView>
  )
}