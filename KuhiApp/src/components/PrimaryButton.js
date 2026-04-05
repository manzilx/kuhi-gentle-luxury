import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/tokens';

export default function PrimaryButton({ title, onPress, inverted = false }) {
  return (
    <TouchableOpacity
      style={[styles.button, inverted && styles.inverted]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, inverted && styles.invertedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  inverted: {
    backgroundColor: colors.surface,
  },
  text: {
    fontFamily: 'Manrope',
    fontSize: 10,
    letterSpacing: 4,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: colors.onPrimary,
  },
  invertedText: {
    color: colors.primary,
  },
});
