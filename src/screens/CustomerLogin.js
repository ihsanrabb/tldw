import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import Input from '../components/ui/Input';
import { API_URL } from "@env";
import { storeData } from '../utils/storage';

const TenantLogin = ({ navigation }) => {
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
      storeData('user_data',{ 
        token: data.token,
        role: data.role
      });
      navigation.navigate('Home');
    } catch(err) {
      console.log('Error login customer', err);
      // Alert.alert('Error login!', err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login as Customer</Text>
      <Input 
        value={email}
        onChangeText={setEmail}
        placeholder="test@email.com"
        placeholderTextColor="darkgrey"
        textContentType="emailAddress"
        autoComplete="email"
        keyboardType="email-address"
      />
      <Input 
        value={password}
        onChangeText={setPassword}
        placeholder="******"
        secureTextEntry={true}
        placeholderTextColor="darkgrey"
        textContentType="password"
        autoComplete="password"
      />
      <TouchableWithoutFeedback onPress={() => { navigation.navigate('CustomerSignup') }}>
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
};

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
});

export default TenantLogin;
