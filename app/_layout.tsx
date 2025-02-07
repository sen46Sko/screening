import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '@/components/TabBar';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

const _layout: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Devi': require('../assets/fonts/Devi.ttf'),
  });
  
  return (
    fontsLoaded ? <Tabs
      tabBar={(props) => <TabBar {...props}/>}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home'
        }}
      />
      <Tabs.Screen
        name='details'
        options={{
          title: 'Details'
        }}
      />
    </Tabs> : <View/>
  );
};

export default _layout;
