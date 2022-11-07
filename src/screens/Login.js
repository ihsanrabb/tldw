import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you?</Text>
      <View style={styles.boxContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate('TenantLogin') }}>
          <View style={[{backgroundColor: 'darkcyan'}, styles.box]}>
            <Text style={styles.text}>Tenant</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('CustomerLogin') }}>
          <View style={[{backgroundColor: 'cornflowerblue'}, styles.box]}>
            <Text style={styles.text}>Customer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 100
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