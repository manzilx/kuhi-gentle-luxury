import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/tokens';

export default function Footer() {
  const links = ['Privacy Policy', 'Shipping & Returns', 'Sustainability', 'Contact'];

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>KUHI</Text>
      <View style={styles.links}>
        {links.map((link) => (
          <TouchableOpacity key={link}>
            <Text style={styles.link}>{link}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.divider} />
      <Text style={styles.copyright}>&copy; 2025 KUHI ATELIER. ALL RIGHTS RESERVED.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 64,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Newsreader',
    fontSize: 36,
    color: '#FFFFFF',
    letterSpacing: -1,
    marginBottom: 32,
    opacity: 0.3,
  },
  links: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 32,
  },
  link: {
    fontFamily: 'Manrope',
    fontSize: 9,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
  },
  divider: {
    width: 48,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginBottom: 16,
  },
  copyright: {
    fontFamily: 'Manrope',
    fontSize: 8,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.2)',
  },
});
