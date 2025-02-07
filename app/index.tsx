import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { sharedStyles, STATUS_BAR_HEIGHT } from '@/constants/styles';
import { ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { UserInfo } from '@/components/UserInfo';
import { Slider } from '@/components/Slider';
import { CompanySlider } from '@/components/CompanySlider';
import { Feather } from '@expo/vector-icons';

const Home: React.FC = () => {
  return (
    <View
      style={sharedStyles.container}>
    >
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode="cover"
        style={sharedStyles.container}
      >
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.controls}>
            <TouchableOpacity onPress={null}>
              <Feather name="more-horizontal" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <UserInfo name={'Georgia'} description={'Let\'s start designing'}/>
          <Slider/>
          <CompanySlider/>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: STATUS_BAR_HEIGHT,
    paddingBottom: 90,
  },
  controls: {
    paddingHorizontal: 24,
    alignItems: 'flex-end',
  }
});

export default Home;
