import { SafeAreaView, StyleSheet, Text, View, style } from "react-native";
import React from "react";

export default function Test() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Hello</Text>
  </View>
);
};

const styles = StyleSheet.create({
container: {
//  flex: 1,
// flexGrow:1
//   justifyContent: 'center',
   alignItems: 'center',
},
text: {
  fontSize: 24,
  fontWeight: 'bold',
},
});
