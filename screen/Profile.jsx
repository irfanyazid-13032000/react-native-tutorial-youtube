import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Avatar,Button} from 'react-native-paper'
import { useSelector } from 'react-redux'

export default function Profile() {
  const role = useSelector((state)=>state.auths.role)
  return (
    <View style={styles.container}>
      <Avatar.Image
      size={150}
      source={{uri:"https://picsum.photos/id/12/200/300"}}
      />
      <Text style={styles.name}>{role}</Text>
      <Text style={styles.bio}>i am a kickboxer and singer</Text>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  name:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:10
  },
  bio:{
    margin:10,
    textAlign:'center'
  }
})