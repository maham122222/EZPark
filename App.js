import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import Otp from "./components/Otp";
import Test from "./components/Test";
import Map from "./components/Map";
import { useState } from "react";
import MapViewDirections from 'react-native-maps-directions';
import { ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* <BookingParkingDetail/> */}
      {/* <ExtendParkingTime/> */}
      {/* <Wallet/> */}
      {/* <BookingConformation/> */}
      {/* <EditProfile/> */}
      {/* <Otp></Otp> */}
       { <Otp/> }


    </ScrollView>
  );
  // const [state, setState] = useState({
  //   //pick up location
  //   pickupCords: {
  //     latitude: 30.7046,
  //     longitude: 76.7179,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   }, //drop location
  //   droplocationCords: {
  //     latitude: 30.7333,
  //     longitude: 76.7794,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
    }
  // });

  // const { pickupCords, droplocationCords } = state;

  // return (
    // <View style={styles.container}>
    //   <MapView
    //     style={StyleSheet.absoluteFill}
    //     initialRegion={pickupCords}
          
          
        
    //   >
    //     <MapViewDirections
    //       origin={pickupCords}
    //       destination={droplocationCords}
    //       apikey={GOOGLE_MAPS_APIKEY}
    //     />
    //   </MapView>
    // </View>
  // );
// }

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  // },
});
