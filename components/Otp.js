import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";

const Otp = () => {
  // using reference for making logic
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const [f1, setf1] = useState("");
  const [f2, setf2] = useState("");
  const [f3, setf3] = useState("");
  const [f4, setf4] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../assets/pic1.jpeg")}
          style={styles.OtpImage}
        />
        <View style={styles.mainTextHeight}>
          <Text style={styles.mainText}>OTP Verification</Text>
        </View>
      </View>

      <View style={styles.textHeight}>
        <Text style={styles.text}>
          Confirmation code has been sent to you on your mobile number +92
          1234567890
        </Text>
      </View>

      <View style={styles.otpView}>
        <TextInput
          ref={et1}
          style={[
            styles.inputView,
            { borderColor: f1.length >= 1 ? "white" : "black" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f1}
          onChangeText={(txt) => {
            setf1(txt);
            if (txt.length >= 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={[
            styles.inputView,
            { borderColor: f2.length >= 1 ? "white" : "black" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f2}
          onChangeText={(txt) => {
            setf2(txt);
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et1.current.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={[
            styles.inputView,
            { borderColor: f3.length >= 1 ? "white" : "black" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f3}
          onChangeText={(txt) => {
            setf3(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={[
            styles.inputView,
            { borderColor: f4.length >= 1 ? "white" : "black" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f4}
          onChangeText={(txt) => {
            setf4(txt);
            if (txt.length > 1) {
              et2.current.focus();
            } else if (txt.length < 1) {
              et3.current.focus();
            }
          }}
        />
      </View>

      <TouchableOpacity
        disable={
          f1 !== "" && f2 !== "" && f3 !== "" && f4 !== "" ? false : true
        }
        style={[
          styles.verifytBtn,
          {
            backgroundColor:
              f1 !== "" && f2 !== "" && f3 !== "" && f4 !== ""
                ? "#007cb9"
                : "lightgrey",
          },
        ]}
      >
        <Text style={styles.btnTxt}>Verify OTP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OtpImage: {
    height: 200,
    marginTop: 50,
    width: 350,
  },
  container: {
    backgroundColor: "#38598b",
    height: "100%",
    alignItems: "center",
  },
  mainText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  mainTextHeight: {
    alignItems: "center",
    marginTop: 20,
  },

  textHeight: {
    height: 50,
    width: 300,
    marginTop: 8,
  },
  text: {
    color: "lightgrey",
    alignItems: "center",
    textAlign: "center",
  },
  otpView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
 
    
  },
  inputView: {
    width: 47,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 2,
    marginLeft: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color:'white'
  },
  verifytBtn: {
    width: "90%",
    height: 55,
    backgroundColor: "#007cb9",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default Otp;
