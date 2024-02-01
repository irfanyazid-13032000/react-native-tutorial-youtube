import React from 'react'
import { deleteToken } from '../slice/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export default function Logout() {

  const dispatch = useDispatch()
  const navigation = useNavigation()

  dispatch(deleteToken())

  navigation.navigate('Login')


  
}
