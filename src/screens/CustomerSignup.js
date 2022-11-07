import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Input from '../components/ui/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { API_URL } from "@env";

const CustomerSignup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSubmit = async () => {
    if(!email || !password || !name || !phoneNumber) {
      Alert.alert('Please input all field');
    }
    const body = { email, password, name, phone_number: phoneNumber, user_role: "customer" };

    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log('dataResponse', data);
    } catch(err) {
      console.log('error signup', err)
      Alert.alert('Error signup!', err);
    }
  }

  return (
    <KeyboardAwareScrollView
      style={styles.wrapper}
      extraHeight={50}
      enableOnAndroid={true}
    >
      <Text style={styles.title}>Register your Account</Text>
      <Input 
        labelText="Your Email:"
        onChangeText={setEmail}
        value={email}
        placeholder="test@email.com"
        placeholderTextColor="darkgrey"
        textContentType="emailAddress"
        autoComplete="email"
        keyboardType="email-address"
      />
      <Input 
        labelText="Your password:"
        value={password}
        onChangeText={setPassword}
        placeholder="******"
        secureTextEntry={true}
        placeholderTextColor="darkgrey"
        textContentType="password"
        autoComplete="password"
      />
      <Input 
        labelText="Your Name:"
        value={name}
        onChangeText={setName}
        placeholder="ihsanuddin"
        placeholderTextColor="darkgrey"
      />
      <Input 
        labelText="Your Phone number:"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="08119157542"
        placeholderTextColor="darkgrey"
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleSubmit}
      >
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 14
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 14,
  },
  title: {
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20
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
})

export default CustomerSignup;