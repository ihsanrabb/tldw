import React from 'react';
import { 
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const Input = (props) => {
  const {
    textStyle,
    labelText,
    ...rest
  } = props;
  const [borderColor, setBorderColor] = React.useState('black');

  return (
    <>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        style={[styles.input, { borderColor }]}
        onFocus={() => setBorderColor('darkcyan')}
        onBlur={() => setBorderColor('black')}
        {...rest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#000',
    borderColor: 'black'
  },
  label: {
    color: 'dimgrey',
    marginBottom: 5
  },
});

export default Input;
