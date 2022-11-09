import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const Header = (props) => {
  return (
    <TouchableOpacity style={styles.header} onPress={() => props.navigation.goBack()}>
      <Image
        style={styles.icon}
        source={require('../../assets/left-arrow.png')}
      />
      <Text style={styles.headerText}>Back</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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

export default Header;

