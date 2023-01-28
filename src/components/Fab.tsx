import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position: 'br' | 'bl';
}

export const Fab = ({title, onPress, position = 'bl'}: Props) => {
  return (
    <View
      style={[styles.fabLocation, position === 'br' ? styles.BR : styles.BL]}>
      <TouchableNativeFeedback 
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 40,
  },
  BR: {
    right: 40,
  },
  BL: {
    left: 40,
  },
  fab: {
    backgroundColor: 'blue',
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  fabText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
