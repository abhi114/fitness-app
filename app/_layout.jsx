import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name='Exercises' options={{presentation:'fullScreenModal'}}/>
      <Stack.Screen name='ExerciseDetails' options={{presentation:'modal'}}/>
      
    </Stack>
  )
}

export default _layout