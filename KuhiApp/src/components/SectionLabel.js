import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../theme/tokens';

export default function SectionLabel({ children, light = false, gold = false }) {
  return (
    <Text
      style={[
        styles.label,
        light && styles.light,
        gold && styles.gold,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Manrope',
    fontSize: 9,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: 'rgba(26,26,26,0.4)',
  },
  light: {
    color: 'rgba(255,255,255,0.3)',
  },
  gold: {
    color: colors.secondary,
  },
});
