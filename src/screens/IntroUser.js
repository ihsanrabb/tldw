import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { PageSlider } from '@pietile-native-kit/page-slider';

const IntroUser = ({ navigation }) => {
  const [selectedPage, setSelectedPage] = React.useState(0);

  const handleNextSlide = () => {
    if (selectedPage === 2) {
      navigation.navigate('Login')
      return
    }

    setSelectedPage(prevState => prevState + 1);
  }

  return (
    <PageSlider
      style={styles.pageSlider}
      selectedPage={selectedPage}
      onSelectedPageChange={setSelectedPage}
      onCurrentPageChange={() => console.log('slide')}
    >
      <View style={[styles.page]}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../assets/queue.jpg')}
            />
          </View>
          <View style={styles.contentWrapper}>
            <View>
              <Text style={styles.title}>Wasting time in queues? Say no more!</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </View>
            <View style={styles.bottomWrapper}>
              <Text style={styles.count}>{selectedPage + 1}/3</Text>
              <TouchableOpacity style={styles.btnWrapper} onPress={handleNextSlide}>
                <Text style={styles.titleNext}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.page]}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../assets/calender.jpg')}
            />
          </View>
          <View style={styles.contentWrapper}>
            <View>
              <Text style={styles.title}>Pre-book your slot for any service.</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </View>
            <View style={styles.bottomWrapper}>
              <Text style={styles.count}>{selectedPage + 1}/3</Text>
              <TouchableOpacity style={styles.btnWrapper} onPress={handleNextSlide}>
                <Text style={styles.titleNext}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.page]}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../assets/alert.jpg')}
            />
          </View>
          <View style={styles.contentWrapper}>
            <View>
              <Text style={styles.title}>Get alerts via notification.</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </View>
            <View style={styles.bottomWrapper}>
              <Text style={styles.count}>{selectedPage + 1}/3</Text>
              <TouchableOpacity style={styles.btnWrapper} onPress={handleNextSlide}>
                <Text style={styles.titleNext}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </PageSlider>
  );
}

const styles = StyleSheet.create({
  pageSlider: {
    width: '100%',
    flex: 1
  },
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  imageWrapper: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250,
  },
  contentWrapper: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    paddingTop: 10,
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  count: {
    fontSize: 14,
    fontWeight: '600'
  },
  btnWrapper: {
    backgroundColor: '#0057ff',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 14
  },
  titleNext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  },
})

export default IntroUser;
