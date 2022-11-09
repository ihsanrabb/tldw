import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.description}>Welcome to tldw.</Text>
      <Text style={styles.helperText}>Please identify yourself.</Text>
      <TouchableOpacity style={styles.wrapperBox} onPress={() => { navigation.navigate('CustomerLogin') }}>
        <Image
          style={styles.image}
          source={require('../assets/customer.png')}
        />
        <Text style={[styles.textIdentify, { backgroundColor: '#f5b131' }]}>Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapperBox} onPress={() => { navigation.navigate('TenantLogin') }}>
        <Image
          style={styles.image}
          source={require('../assets/store.png')}
        />
        <Text style={[styles.textIdentify, { backgroundColor: 'darkcyan' }]}>Tenant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 100
  },
  description: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  helperText: {
    color: '#333',
    fontSize: 16,
    marginBottom: 42,
  },
  image: {
    width: '99%',
    height: 150,
    resizeMode: 'cover'
  },
  wrapperBox: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    marginBottom: 40
  },
  textIdentify: {
    color: '#333',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 5
  },
  boxContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    padding: 10,
    justifyContent: 'center'
  },
  box: {
    width: 110,
    height: 110,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default Login;
