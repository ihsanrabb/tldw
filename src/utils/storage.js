import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log('error storing data', e)
  }
}

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error get data', e)
  }
}

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log('error remove data', e)
  }

  console.log('Done removeData.')
}

export {
  storeData,
  getData,
  removeData
}
