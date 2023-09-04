import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../components/colorPalette';
import { useState } from 'react';

const palette = colors();


const Login = () => {
  const [phone, setPhone] = useState(" ")
  const [typing, setTyping] = useState(false)
  return (
    <View style={styles.container}>
      < View style={{ flex: typing ? 0.2 : 3 }}>
        <Text style={styles.text}> www.nyirendas.co.tz </Text>
      </View >
      <View style={{
        flex: typing ? 4.8 : 2,
        alignItems: "center"
      }}>
        <View style={styles.titleView}>
          <Text style={styles.title}> Manage your water usage like never before with our prepaid water meter app. Track real-time consumption, receive low balance alerts, and easily top up from your phone. Say goodbye to surprise bills – take control today!</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='eg ... 0789 105 606'
            placeholderTextColor={palette.primaryWhite}
            keyboardType='numeric'
            onFocus={() => { setTyping(true) }}
            onBlur={() => { setTyping(false) }}
          />
          <TouchableOpacity style = {styles.button}>
            <Text>login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: palette.primaryWhite,
  },
  titleView: {
    flex: 1,
    width: "98%"
  },
  title: {
    color: palette.primaryWhite,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600"
  },
  form: {
    flex: 2,
    width: "98%"
  },
  input: {
    height: 50,
    width: "60%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: palette.primaryWhite,
    color: palette.primaryWhite,
    borderRadius: 7,
    textAlign: "center",
    padding: 10,
    margin: 10
  },
  button: {
    height: 50,
    width: "60%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: palette.primaryWhite,
    color: palette.primaryWhite,
    borderRadius: 7,
    textAlign: "center",
    padding: 10,
    margin: 10
  }
});


export default Login