import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/tokens';

export default function GhostButton({ title, onPress, light = false }) {
  return (
    <TouchableOpacity
      style={[styles.button, light && styles.light]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, light && styles.lightText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'rgba(26,26,26,0.2)',
    paddingVertical: 18,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  light: {
    borderColor: 'rgba(255,255,255,0.2)',
  },
  text: {
    fontFamily: 'Manrope',
    fontSize: 10,
    letterSpacing: 4,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: colors.primary,
  },
  lightText: {
    color: '#FFFFFF',
  },
});
