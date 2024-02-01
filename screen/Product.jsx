import { StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native'
import React from 'react'

export default function Product() {
  const data = [
    {id:1,title:"bakso"},
    {id:2,title:"laptop"},
    {id:3,title:"sandal"},
  ]
  return (
    <View>
      <SafeAreaView/>

      <Text>Product</Text>
      <FlatList
      data={data}
      renderItem={({item})=>(
        <View style={styles.flatListContainer}>
          <Text style={{color:"white"}}>{item.title}</Text>
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  flatListContainer:{
    backgroundColor:"purple",
    marginHorizontal:16,
    marginVertical:10,
    paddingBottom:32,
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center'
  }
})