import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/routes';
import HomeIcon from '../assets/images/Subtract.svg';
import DetailsIcon from '../assets/images/Magic.svg';

export const TabButton = (props) => {
  const {isFocused, routeName} = props;
  
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withSpring(isFocused ? Colors.Accent : 'transparent')
  }));
  
  const getIcon = (routeName: Routes) => {
    switch (routeName) {
      case Routes.Home:
        return <HomeIcon width={16} height={16} color={isFocused ? Colors.Contrast : Colors.Light}/>
      case Routes.Details:
        return <DetailsIcon width={16} height={16} color={isFocused ? Colors.Contrast : Colors.Light}/>
      default:
        return null;
    }
  }
  
  return (
    <Pressable {...props} style={styles.container} onPress={props.onPress}>
      <Animated.View style={[styles.tabButton, animatedStyle]}>
        {getIcon(routeName)}
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  tabButton: {
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 38,
  },
  tabButtonFocused: {
    backgroundColor: Colors.Accent,
  }
})
