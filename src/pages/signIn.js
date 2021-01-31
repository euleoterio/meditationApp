import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import Background from '../components/backSign.js';
import GoogleIcon from '../components/googleIcon.js';

export default function signIn({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.background}>
          <Background />
        </View>
        <TouchableOpacity style={styles.returnBtn}>
          <EvilIcons
            name="arrow-left"
            size={55}
            color="black"
            onPress={() => navigation.navigate(route.params.page)}
          />
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.titleTxt}>Welcome Back!</Text>
        </View>

        <View style={styles.face}>
          <TouchableOpacity style={styles.faceBtn}>
            <EvilIcons
              name="sc-facebook"
              size={34}
              color="white"
              style={styles.faceSymbol}
            />
            <Text
              style={styles.faceTxt}
              // onPress={() => navigation.navigate('SignUp')}
            >
              CONTINUE WITH FACEBOOK
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.google}>
          <TouchableOpacity style={styles.googleBtn}>
            <GoogleIcon style={styles.googleSymbol} />
            <Text
              style={styles.googleTxt}
              // onPress={() => navigation.navigate('SignUp')}
            >
              CONTINUE WITH GOOGLE
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orLog}>OR LOG IN WITH EMAIL</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.formEmail}
            // value={altura}
            // onChangeText={(altura) => setAltura(altura)}
            placeholder="Email address"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.formPassword}
            // value={altura}
            // onChangeText={(altura) => setAltura(altura)}
            placeholder="Password"
            autoCorrect={false}
            secureTextEntry={true}
            // keyboardType="email-address"
          />
        </View>

        <View style={styles.logIn}>
          <TouchableOpacity style={styles.logInBtn}>
            <Text
              style={styles.logInTxt}
              // onPress={() => navigation.navigate('SignUp')}
            >
              LOG IN
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.forgot}> Forgot Password?</Text>

        <Text style={styles.singIn}>ALREADY HAVE AN ACCOUNT?</Text>
        <Text
          style={styles.signInPage}
          onPress={() => navigation.navigate('SignUp', { page: 'SignIn' })}
        >
          SING UP
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    // backgroundColor: 'red',
    position: 'absolute',
    width: 547.19,
    height: 428.24,
    // left: -101.14,
    top: -77.77,
  },
  returnBtn: {
    position: 'absolute',
    left: 20.24,
    top: 50,
  },
  title: {
    position: 'absolute',
    width: 208,
    height: 38,
    left: 103,
    top: 133.47,
  },
  titleTxt: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 28,
    // textAlign: 'center',
    color: '#3F414E',
  },
  face: {
    position: 'absolute',
    width: 374,
    height: 63,
    left: 20,
    top: 204.47,
  },
  faceBtn: {
    position: 'absolute',
    width: 374,
    height: 63,
    backgroundColor: '#7583CA',
    borderRadius: 38,
  },
  faceSymbol: {
    position: 'absolute',
    width: 22.03,
    height: 34.06,
    left: 34.84,
    top: 19.47,
  },
  faceTxt: {
    position: 'absolute',
    width: 207.77,
    height: 14,
    left: 92.65,
    top: 24.5,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#F6F1FB',
  },
  google: {
    position: 'absolute',
    width: 374,
    height: 63,
    left: 20,
    top: 287.47,
  },
  googleBtn: {
    position: 'absolute',
    width: 374,
    height: 63,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 38,
  },
  googleSymbol: {
    position: 'absolute',
    width: 22.03,
    height: 34.06,
    left: 34.84,
    top: 19.47,
  },
  googleTxt: {
    position: 'absolute',
    width: 188.54,
    height: 14,
    left: 92.65,
    top: 24.5,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#3F414E',
  },
  orLog: {
    position: 'absolute',
    width: 188.54,
    height: 14,
    left: 112.73,
    top: 390.47,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#A1A4B2',
  },
  logIn: {
    position: 'absolute',
    width: 374,
    height: 63,
    left: 20,
    top: 629.47,
  },
  logInBtn: {
    position: 'absolute',
    width: 374,
    height: 63,
    backgroundColor: '#8E97FD',
    borderRadius: 38,
  },
  logInTxt: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    paddingLeft: 156,
    paddingTop: 25,
    color: '#F6F1FB',
  },
  formEmail: {
    position: 'absolute',
    width: 374,
    height: 63,
    left: 20,
    top: 444.47,
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
    padding: 20,
  },
  formPassword: {
    position: 'absolute',
    width: 374,
    height: 63,
    left: 20,
    top: 527.47,
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
    padding: 20,
  },
  forgot: {
    position: 'absolute',
    width: 134.54,
    height: 16,
    left: 139.73,
    top: 703.47,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#3F414E',
  },
  singIn: {
    position: 'absolute',
    width: 293.1,
    height: 14,
    top: 782,
    left: 60.45,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#A1A4B2',
  },
  signInPage: {
    position: 'absolute',
    // width: 282,
    // height: 14,
    top: 782,
    right: 80,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#3646DB',
  },
});
