import { FlatList, Animated, Dimensions, StyleSheet, View, ImageBackground, Text, Image } from 'react-native';
import { RENT_DATA } from '@/constants/core';
import { RentItem } from '@/types/core.types';
import { Button } from '@/components/Button';
import { Colors } from '@/constants/colors';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width - 24;

export const Slider = () => {
  const scrollX = new Animated.Value(0);
  
  const renderItem = ({ item }: {item: RentItem}) => {
    return (
      <View style={styles.itemContainer}>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={{
            height: 494,
          }}
        >
          <View style={styles.slideContent}>
            <View>
              <Text style={styles.slideName}>{item.name}</Text>
              <Text style={styles.slideDescription}>{item.description}</Text>
            </View>
            <View style={styles.buttons}>
              <Button onPress={null} text='Apply to my room'/>
              <Button onPress={null} text='Details' isReverse/>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  return (
    <AnimatedFlatList
      data={RENT_DATA}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={ITEM_WIDTH}
      decelerationRate="fast"
      contentContainerStyle={styles.contentContainer}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 36,
    paddingLeft: 0,
  },
  itemContainer: {
    width: ITEM_WIDTH,
  },
  image: {
    width: '100%',
  },
  slideContent: {
    padding: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 22,
  },
  slideName: {
    fontSize: 32,
    color: Colors.Contrast,
    fontWeight: 500,
  },
  slideDescription: {
    fontSize: 16,
    color: Colors.Contrast,
  }
});
