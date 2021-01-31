import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Silent from '../components/silent.js';
import Background from '../components/background.js';
import MainImg from '../components/mainImg.js';

export default function home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.bg}>
          <Background />
          <View style={styles.silent}>
            <Silent />
          </View>
          <View style={styles.img}>
            <MainImg />
          </View>
        </View>

        <View style={styles.text}>
          <Text style={styles.title}>We are what we do</Text>
          <Text style={styles.desc}>
            Thousand of people are usign silent moon for smalls meditation{' '}
          </Text>
        </View>

        <View style={styles.sing}>
          <TouchableOpacity style={styles.singBtn}>
            <Text
              style={styles.singTxt}
              onPress={() =>
                navigation.navigate('SignUp', { page: 'HomeScreen' })
              }
            >
              SING UP
            </Text>
          </TouchableOpacity>
          <Text style={styles.singIn}>ALREADY HAVE AN ACCOUNT?</Text>
          <Text
            style={styles.logIn}
            onPress={() =>
              navigation.navigate('SignIn', { page: 'HomeScreen' })
            }
          >
            LOG IN
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bg: {
    // backgroundColor: '#BE97FD',
    position: 'absolute',
    width: 423,
    height: 504,
    left: -3,
    top: 0,
  },
  silent: {
    position: 'absolute',
    width: 168,
    height: 30,
    left: 123,
    top: 10,
  },
  img: {
    position: 'absolute',
    width: 332.22,
    height: 242.69,
    top: 160,
    left: 40.69,
  },
  text: {
    position: 'absolute',
    width: 298,
    height: 109,
    top: 534,
    left: 58,
    paddingTop: 30,
    // left: '14.01%',
    // right: '14.01%',
    // top: '59.6%',
    // bottom: '28.24%',
  },
  title: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#3F414E',
  },
  desc: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    textAlign: 'center',
    color: '#A1A4B2',
    paddingTop: 15,
  },
  sing: {
    position: 'absolute',
    width: 374,
    height: 97,
    left: 20,
    top: 705,
    // bottom: 94,
  },
  singBtn: {
    position: 'absolute',
    width: 374,
    height: 63,
    backgroundColor: '#8E97FD',
    borderRadius: 38,
  },
  singTxt: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    paddingLeft: 156,
    paddingTop: 25,
    color: '#F6F1FB',
  },
  singIn: {
    position: 'absolute',
    width: 282,
    height: 14,
    top: 83,
    left: 46,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#A1A4B2',
  },
  logIn: {
    position: 'absolute',
    // width: 282,
    // height: 14,
    top: 83,
    right: 66,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#3646DB',
  },
});
