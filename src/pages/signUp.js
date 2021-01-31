import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  EvilIcons,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';

import Background from '../components/backSign.js';
import GoogleIcon from '../components/googleIcon.js';

export default function signUp({ navigation, route }) {
  const [checked, setCheck] = useState(false);
  const [visiblePass, setVisiblePass] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let empty = true;

  function onFocusName(name) {
    empty = name !== '' ? true : false;
  }
  function onFocusEmail(email) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    empty = reg.test(email) === true ? true : false;
  }

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
          <Text style={styles.titleTxt}>Create your account</Text>
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
          <View style={styles.formName}>
            <TextInput
              value={name}
              onChangeText={(name) => setName(name)}
              placeholder="Name"
              onFocus={onFocusName(name)}
            />
            <View style={styles.symbol}>
              <Text>
                {empty ? (
                  <AntDesign name="check" size={24} color="green" />
                ) : (
                  ''
                )}
              </Text>
            </View>
          </View>
          <View style={styles.formEmail}>
            <TextInput
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholder="Email address"
              autoCorrect={false}
              keyboardType="email-address"
              onFocus={onFocusEmail(email)}
            />
            <View style={styles.symbol}>
              <Text>
                {empty ? (
                  <AntDesign name="check" size={24} color="green" />
                ) : (
                  ''
                )}
              </Text>
            </View>
          </View>
          <View style={styles.formPassword}>
            <TextInput
              value={password}
              onChangeText={(password) => setPassword(password)}
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry={visiblePass}
            />
            <View style={styles.symbol}>
              <TouchableOpacity onPress={() => setVisiblePass(!visiblePass)}>
                {!visiblePass && (
                  <Ionicons name="ios-eye-outline" size={24} color="grey" />
                )}
                {visiblePass && (
                  <Ionicons name="ios-eye-off-outline" size={24} color="grey" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.getStarted}>
          <TouchableOpacity style={styles.getStartedBtn}>
            <Text
              style={styles.getStartedTxt}
              // onPress={() => navigation.navigate('SignUp')}
            >
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.privacePolicy}>I have read the Privace Policy</Text>

        <View style={styles.checkbox}>
          <TouchableOpacity onPress={() => setCheck(!checked)}>
            {checked && (
              <MaterialCommunityIcons
                name="checkbox-marked-outline"
                size={24}
                color="grey"
              />
            )}
            {!checked && (
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                size={24}
                color="grey"
              />
            )}
          </TouchableOpacity>
        </View>
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
    width: 273,
    height: 38,
    left: 70.5,
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
  getStarted: {
    position: 'absolute',
    width: 374,
    height: 63,
    left: 20,
    top: 747.63,
  },
  getStartedBtn: {
    position: 'absolute',
    width: 374,
    height: 63,
    backgroundColor: '#8E97FD',
    borderRadius: 38,
  },
  getStartedTxt: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    paddingLeft: 135.7,
    paddingTop: 25,
    color: '#F6F1FB',
  },
  formName: {
    position: 'absolute',
    width: 374,
    height: 63,
    left: 20,
    top: 444.47,
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
    padding: 20,
  },
  formEmail: {
    position: 'absolute',
    width: 374,
    height: 63,
    left: 20,
    top: 527.47,
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
    padding: 20,
  },
  formPassword: {
    position: 'absolute',
    width: 374,
    height: 63,
    left: 20,
    top: 610.47,
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
    padding: 20,
    // justifyContent: 'space-between',
  },
  privacePolicy: {
    position: 'absolute',
    width: 218.76,
    height: 16.9,
    left: 20,
    top: 697.9,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#A1A4B2',
  },
  checkbox: {
    position: 'absolute',
    left: 359.5,
    top: 693.47,
  },
  symbol: {
    top: -17,
    left: 302.04,
  },
});
