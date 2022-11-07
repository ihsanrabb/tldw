import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import { API_URL } from "@env";

const TenantLogin = ({ navigation }) => {
  const [borderColor, setBorderColor] = React.useState({
    email: 'black',
    password: 'black'
  });
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = async () => {
    if(!email || !password) {
      return Alert.alert('Please fill email and password!');
    }
    const body = { email, password };
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log('dataResponse', data);
      navigation.navigate('Home');
    } catch(err) {
      console.log('Error login tenant', err);
      // Alert.alert('Error login!', err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login as Tenant</Text>
      <TextInput
        style={[styles.input, {borderColor: borderColor.email}]}
        onChangeText={setEmail}
        value={email}
        placeholder="test@email.com"
        placeholderTextColor="darkgrey"
        textContentType="emailAddress"
        autoComplete="email"
        keyboardType="email-address"
        onFocus={() => setBorderColor(prevState => ({...prevState, email: 'darkcyan'}))}
        onBlur={() => setBorderColor(prevState => ({...prevState, email: 'black'}))}
      />
      <TextInput
        style={[styles.input, {borderColor: borderColor.password}]}
        value={password}
        onChangeText={setPassword}
        placeholder="******"
        secureTextEntry={true}
        placeholderTextColor="darkgrey"
        textContentType="password"
        autoComplete="password"
        onFocus={() => setBorderColor(prevState => ({...prevState, password: 'darkcyan'}))}
        onBlur={() => setBorderColor(prevState => ({...prevState, password: 'black'}))}
      />
      <TouchableWithoutFeedback onPress={() => { navigation.navigate('TenantSignup') }}>
        <Text style={styles.descriptionText}>Dont have account? create here</Text>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={onSubmit}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 14
  },
  title: {
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 40
  },
  input: {
    height: 50,
    marginVertical: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#000',
    borderColor: 'black'
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: 'teal',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  descriptionText: {
    fontSize: 12,
    color: 'blue',
    textDecorationLine: 'underline',
  }
})

export default TenantLogin;