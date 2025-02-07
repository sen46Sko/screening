import { View, StyleSheet } from 'react-native'
import React from 'react'
import { TabButton } from '@/components/TabButton';
import { Colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

export const TabBar = ({ state, descriptors, navigation }) => {

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255,255,255,0)','rgba(255,255,255,0.78)', '#ffffff']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View style={styles.tabbar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
          
          if(['_sitemap', '+not-found'].includes(route.name)) return null;
          
          const isFocused = state.index === index;
          
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
          
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          
          return (
            <TabButton
              key={route.name}
              style={{}}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              routeName={route.name}
              label={label}
            />
          )
          
          // return (
          //   <TouchableOpacity
          //     key={route.name}
          //     style={styles.tabbarItem}
          //     accessibilityRole="button"
          //     accessibilityState={isFocused ? { selected: true } : {}}
          //     accessibilityLabel={options.tabBarAccessibilityLabel}
          //     testID={options.tabBarTestID}
          //     onPress={onPress}
          //     onLongPress={onLongPress}
          //   >
          //     {
          //         icons[route.name]({
          //             color: isFocused? primaryColor: greyColor
          //         })
          //     }
          //     <Text style={{
          //         color: isFocused ? primaryColor : greyColor,
          //         fontSize: 11
          //     }}>
          //       {label}
          //     </Text>
          //   </TouchableOpacity>
          // );
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  tabbar: {
    position: 'absolute',
    bottom: 30,
    borderRadius: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.Main,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    width: 'auto',
    minWidth: 'auto',
    alignSelf: 'center',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    width: '100%',
    background: 'red',
  }
});
