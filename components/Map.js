import { StyleSheet, Text, View,MapView } from 'react-native'
import React from 'react'

export default function Map() {
  return (
    <View>
     <MapView style={StyleSheet.absoluteFill}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
    </View>
  )
}

const styles = StyleSheet.create({})