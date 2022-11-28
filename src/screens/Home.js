import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { API_URL } from "@env";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { removeData } from '../utils/storage'

const Tab = createBottomTabNavigator();

function ExploreScreen() {
  const [tenants, setTenants] = React.useState([]);

  React.useEffect(() => {
    getAllTenant();
  }, [])

  const getAllTenant = async () => {
    try {
      const response = await fetch(`${API_URL}/tenant`, {
        method: 'GET'
      });
      const data = await response.json();
      setTenants(data.data);
      console.log('getAllTenant', data);
    } catch (err) {
      console.error('Error getAllTenant', err);
    }
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => console.log('Press item')}>
        <View style={styles.item}>
          <Image
            source={{ uri: item.image_url }}
            style={styles.tenant_image}
          />
          <View style={styles.item_content}>
            <Text style={styles.tenant_title}>{item.tenant_name}</Text>
            <Text style={styles.tenant_phone}>{item.phone_number}</Text>
            <Text style={styles.tenant_desc}>{item.description}</Text>
            <Text>Location: {item.location}</Text>
            <Text>category: {item.category}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Last Queue</Text>
      <Text style={styles.title}>List of all tenant</Text>
      <FlatList
        data={tenants}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        ListEmptyComponent={<Text>Tenant is empty</Text>}
      />
    </View>
  );
}

function ProfileScreen(props) {
  const handleLogout = () => {
    removeData('user_data')
    props.navigation.popToTop();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.btnLogout}>
          <Text style={styles.textLogout}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const Home = () => {
  return (
    <Tab.Navigator options={{ headerShown: false }}>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      {/* <Tab.Screen name="Menu" component={MenuScreen} /> */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  item: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 4,
    borderRadius: 4,
    flexDirection: 'row',
    marginBottom: 14
  },
  tenant_image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 4
  },
  item_content: {
    marginLeft: 10
  },
  tenant_title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tenant_phone: {
    fontSize: 12,
    color: 'blue'
  },
  tenant_desc: {
    fontSize: 14
  },
  btnLogout: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4
  },
  textLogout: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default Home;