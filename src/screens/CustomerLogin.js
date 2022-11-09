import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Input from '../components/ui/Input';
import { API_URL } from "@env";
import { storeData } from '../utils/storage';
import Header from '../components/ui/Header'

const TenantLogin = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = async () => {
    if (!email || !password) {
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
      console.log('data', data);
      if (!data.errors) {
        storeData('user_data', {
          token: data.token,
          role: data.role
        });
        navigation.navigate('Home');
      } else {
        Alert.alert(data.message);
      }
    } catch (err) {
      console.log('Error login customer', err);
      // Alert.alert('Error login!', err);
    }
  }

  return (
    <SafeAreaView style={styles.containerView}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Sigin to continue.</Text>
        <Input
          labelText="Enter your e-mail address"
          value={email}
          onChangeText={setEmail}
          placeholder="test@email.com"
          placeholderTextColor="darkgrey"
          textContentType="emailAddress"
          autoComplete="email"
          keyboardType="email-address"
        />
        <Input
          labelText="Enter your password"
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
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={onSubmit}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 30
  },
  title: {
    color: '#333',
    fontSize: 36,
    marginTop: 40,
    fontWeight: '500',
    marginBottom: 30
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: 'teal',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  descriptionText: {
    fontSize: 12,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  icon: {
    width: 15,
    height: 15
  },
  headerText: {
    paddingLeft: 5,
    fontWeight: '400',
    fontSize: 16,
    color: 'blue'
  }
});

export default TenantLogin;
