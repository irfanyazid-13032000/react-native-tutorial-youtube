import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function Button(props) {
  const filledBgColor = props.color || 'purple'
  const outlineColor = 'white'
  const bgColor = props.filled ? filledBgColor : outlineColor
  const textColor = props.filled ? 'white' : "purple"

  return (
    <TouchableOpacity onPress={props.onPress} style={{...styles.button,...{backgroundColor:bgColor},...props.style}}>
      <Text style={{fontSize:18,...{color:textColor}}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    paddingBottom:16,
    paddingVerical:10,
    borderColor:'purple',
    borderWidth:2,
    borderRadius:17,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:'50%'
  }
})