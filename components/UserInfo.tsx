import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Colors } from '@/constants/colors';

type Props = {
  name: string,
  description: string,
}

export const UserInfo: React.FC<Props> = ({name, description}) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Image
          style={styles.avatar}
          source={require('../assets/images/avatar.png')}
        />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    display: 'flex',
    gap: 18,
    flexDirection: 'row',
    marginTop: 32,
  },
  name: {
    fontFamily: 'Devi',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.LightText,
    opacity: 0.4,
  },
  description: {
    fontFamily: 'Devi',
    fontSize: 18,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 7,
    shadowColor: '#3D84AD',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 100,
    elevation: 10,
  }
});
