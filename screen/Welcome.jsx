import { View, Text,Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../component/Button';


export default function Welcome({navigation}) {
  return (
    <LinearGradient style={{flex:1}} colors={['black','purple']}>
      <View style={{flex:1}}>
        <View>
          <Image source={require('../assets/hero1.jpg')} style={{height:100,width:100,borderRadius:20,position:'absolute',top:10,
            transform:[
            {translateX:20},
            {translateY:50},
            {rotate:'-15deg'}
          ]}}/>


          <Image source={require('../assets/hero2.jpg')} style={{height:100,width:100,borderRadius:20,position:'absolute',top:-30,left:100,
            transform:[
            {translateX:50},
            {translateY:50},
            {rotate:'-5deg'}
          ]}}/>


          <Image source={require('../assets/hero2.jpg')} style={{height:100,width:100,borderRadius:20,position:'absolute',top:130,left:-50,
            transform:[
            {translateX:50},
            {translateY:50},
            {rotate:'15deg'}
          ]}}/>



          <Image source={require('../assets/hero3.jpg')} style={{height:200,width:200,borderRadius:20,position:'absolute',top:110,left:100,
            transform:[
            {translateX:50},
            {translateY:50},
            {rotate:'-15deg'}
          ]}}/>

        </View>

        <View style={{paddingHorizontal:22,position:'absolute',top:400,width:'100%'}}>
          <Text style={{fontSize:50,fontWeight:80,color:'white'}}>Lets get</Text>
          <Text style={{fontSize:46,fontWeight:80,color:'white'}}>Started</Text>


          <View style={{marginVertical:22}}>
            <Text style={{fontSize:16,color:"white",marginVertical:4}}>connect with each other using chatting</Text>
            <Text style={{fontSize:16,color:"white",marginVertical:4}}>Calling, Enjoy Safe and Private Texting</Text>
          </View>

          <Button title="Join With Us" style={{marginTop:70,paddingTop:7,marginLeft:9,width:'100%'}} onPress={()=>navigation.navigate("Signup")}/>

          <View style={{flexDirection:'row',marginTop:25,justifyContent:'center'}}>
            <Text style={{fontSize:16,color:'white',marginTop:25}}>already have an account?</Text>
            <Pressable onPress={()=>navigation.navigate("Login")}>
              <Text style={{fontSize:16,color:'white',fontWeight:'bold',marginTop:25}}>Login</Text>
            </Pressable>
          </View>


        </View>
      </View>
    </LinearGradient>

  )
}