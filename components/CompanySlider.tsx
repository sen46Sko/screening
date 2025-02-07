import { Image, Dimensions, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Colors } from '@/constants/colors';

const { width } = Dimensions.get('window');

const COMPANIES = [
  { id: '1', logo: require('../assets/images/4.png') },
  { id: '2', logo: require('../assets/images/5.png') },
  { id: '3', logo: require('../assets/images/6.png') }
];

const PAGE_HEIGHT = 40;

export const CompanySlider = () => {
  return (
    <View style={{ marginTop: 60 }}>
      <Text style={styles.title}>
        {`Featuring the `}
        <Text style={styles.subTitle}>Industries Top Brands</Text>
      </Text>
      <Carousel
        loop
        style={styles.container}
        width={120}
        height={PAGE_HEIGHT}
        enabled={false}
        data={COMPANIES}
        renderItem={({ item }) => {
          return (
            <View style={styles.logoWrapper}>
              <Image
                source={item.logo}
                style={styles.logo}
              />
            </View>
          );
        }}
        autoPlay={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: PAGE_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    tintColor: '#000000'
  },
  title: {
    fontFamily: 'Devi',
    fontSize: 18,
    color: Colors.Light,
    marginBottom: 24,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    color: '#000000',
  }
});
