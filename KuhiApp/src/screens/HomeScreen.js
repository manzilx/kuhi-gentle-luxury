import React from 'react';
import {
  View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import { colors, typography, spacing } from '../theme/tokens';
import SectionLabel from '../components/SectionLabel';
import PrimaryButton from '../components/PrimaryButton';
import GhostButton from '../components/GhostButton';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const { width, height } = Dimensions.get('window');

const products = [
  {
    title: 'Golden Gossamer',
    subtitle: 'Muga Silk \u2022 Hand-Loomed',
    price: '\u00a31,24,000',
    tag: 'Limited',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Lxv_tSER2OdCeMdD77_2Mi8SsFzYo1bH5kTgwaxXq5HqK6jg1InodOoBfZhNDZIe-NCc9_w3h366F10GgbClPBkLVSWEO22TcPCBNqsJ8vfhzt67z9X7VVvZuROlC70jO5-tmiIJVPYzCHBHyPD6nq76bI1rhkik__Rbg-uhCdUJdAYEZlJOx5JffBxY_st1MLY3uFALODzRonmb43LXvxmqKKjqHWtbsMB8BKGDcpdEaF_ZJe9cwzJCWlQbRDmSLs6Fa2UQQ9-J',
  },
  {
    title: 'Ivory Heritage',
    subtitle: 'Eri Silk \u2022 Modern Cut',
    price: '\u00a388,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACkwwlNlZItZceh-1kCbT0BaazmFaewM4apN46UWE8JeI_xsjlWhoXQEHhUPJi4YQ0pJbah2Bl2b4KYS2xI35S-Kx6wVdzEmsUaniWHvdVDsOdwlcYaOhsdKeTijqY-2PfyfEEgLawsDQSmqEVpRuDTYYY0zl1eI-YQUXlz_7bsbHIzbvHgjL50ATY2z0uSEyQvejV6od61licfznljja9Lubaze-wJZPxXyypnb5NtJjd789GJ04mfm3dCWIk9eUHJC7eu0NKq1Gf',
  },
  {
    title: 'Midnight Paat',
    subtitle: 'Paat Silk \u2022 Gold Inlay',
    price: '\u00a31,42,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj5iynAdVGFIr-_htt3P54Atcw7kIosUBF9ky1CzS5FjfPb5msQp0JynC68_5gbkwxl6KBF6mA2dO7UwPFB-rH7QdEP9tis3zl9NzVq1c-bW3CTU0b9ZfqwZbPOi77N3lKkPwGTItDQnuPT3wgXVCr07Q72I92FcVqikS3WDGqNX7gNL9s4LWRktGbqlifnp02JsDYugfTK7kr4tYj6gYFB6sW77YlwIdS-wcDFTXpIgaLf-F8IbXUNPRoz0d0v0eEBWrfilP5zOc2',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero */}
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhfywPPZvRsziFyyfqtpmFeJw3EM2actbWI47Po5VW-_8QQfIvzBuw02wVz8jYdlyzPXq3yVN1X2D9oFElpmuQ323Th7MsOzadj4y_WfofhRxYaFIp3X2O9d_Qa9Fztyx-6pU1-hIJzd0q_ho8brNTDHRzd-Yga_hIz88HnsLm4ZmlwlUHJItXHobt4HdiLQKJwkQICLzihl-jc0jbKe8b7QauIIuBX_6pzn6bKx49LnhUihx_x_1RnqljwupltL8rDybmEXcQb7RA' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={styles.heroLabel}>The Autumn / Winter Series</Text>
          <Text style={styles.heroTitle}>Heritage{'\n'}
            <Text style={styles.heroTitleItalic}>Reimagined</Text>
          </Text>
          <PrimaryButton
            title="Explore Collection"
            onPress={() => navigation.navigate('Collections')}
          />
        </View>
      </View>

      {/* Philosophy */}
      <View style={styles.philosophy}>
        <SectionLabel>01 / Philosophy</SectionLabel>
        <Text style={styles.philosophyTitle}>
          Every thread tells a story of a thousand years.
        </Text>
        <Text style={styles.philosophyBody}>
          KUHI represents the pinnacle of Assamese couture. We transcend traditional boundaries by fusing the organic luxury of hand-spun Muga silk with modern silhouettes that command presence.
        </Text>
        <View style={styles.quoteBar}>
          <Text style={styles.quoteText}>
            This is not just clothing; it is the architectural preservation of craftsmanship.
          </Text>
        </View>
      </View>

      {/* Atelier Series */}
      <View style={styles.atelierSection}>
        <View style={styles.atelierHeader}>
          <SectionLabel>Selected Works</SectionLabel>
          <Text style={styles.atelierTitle}>The Atelier Series</Text>
        </View>
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
        <TouchableOpacity style={styles.archiveLink}>
          <Text style={styles.archiveLinkText}>View Entire Archive</Text>
        </TouchableOpacity>
      </View>

      {/* Process Split */}
      <View style={styles.processSection}>
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9Sycw-ppV2ht7L1A-U2VurkQlgLlS-3aoBBppDDQbgWeokbMNZ573QqbzBLErAEH4GlZGWzgpqLSow7Rzfvy0xElslMU6z8h_sHAvkHYRgocRLvT-Nff5K4CqdiUFSxBeDMseOZRFLtdpYGBeb--HZwxn_YcfdHSIPHVnZu1qYdQpk48lNAzeKs-P_AO86W7xc7jZ0rOWIymQBIyA48yTNCCqQoFne_17o-MHgM0GzttwWHhy88BNL0wWpAKa3Eble7woucNVL8Xr' }}
          style={styles.processImage}
        />
        <View style={styles.processContent}>
          <SectionLabel light>The Rhythm of Silence</SectionLabel>
          <Text style={styles.processTitle}>
            Slow Luxury,{'\n'}
            <Text style={{ fontStyle: 'italic' }}>Perfected.</Text>
          </Text>
          <Text style={styles.processBody}>
            In our atelier, haste is the enemy of beauty. A single piece takes forty days of rhythmic dedication.
          </Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>24,000</Text>
              <Text style={styles.statLabel}>Cocoons per Wrap</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>420</Text>
              <Text style={styles.statLabel}>Hours of Weaving</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bespoke CTA */}
      <View style={styles.bespokeCta}>
        <SectionLabel>Private Appointments</SectionLabel>
        <Text style={styles.bespokeTitle}>Craft your legacy with our Master Weavers.</Text>
        <Text style={styles.bespokeBody}>Our bespoke service offers a collaborative journey to design a one-of-a-kind garment.</Text>
        <GhostButton
          title="Book a Consultation"
          onPress={() => navigation.navigate('Bespoke')}
        />
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  // Hero
  hero: {
    height: height * 0.85,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.85,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    backgroundImage: undefined,
  },
  heroContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
    alignItems: 'center',
    gap: spacing.lg,
  },
  heroLabel: {
    fontFamily: 'Manrope',
    fontSize: 9,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: 'rgba(26,26,26,0.6)',
  },
  heroTitle: {
    fontFamily: 'Newsreader',
    fontSize: 64,
    lineHeight: 60,
    fontWeight: '200',
    letterSpacing: -2,
    color: colors.onSurface,
    textAlign: 'center',
  },
  heroTitleItalic: {
    fontStyle: 'italic',
    fontWeight: '300',
  },

  // Philosophy
  philosophy: {
    padding: spacing.lg,
    paddingVertical: spacing.xxxl,
    gap: spacing.lg,
  },
  philosophyTitle: {
    ...typography.sectionTitle,
    fontSize: 32,
    lineHeight: 38,
  },
  philosophyBody: {
    ...typography.body,
    fontSize: 16,
    lineHeight: 26,
  },
  quoteBar: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(26,26,26,0.1)',
    paddingLeft: spacing.lg,
    marginTop: spacing.md,
  },
  quoteText: {
    fontFamily: 'Newsreader',
    fontSize: 18,
    lineHeight: 28,
    fontStyle: 'italic',
    color: colors.onSurface,
    fontWeight: '300',
  },

  // Atelier
  atelierSection: {
    backgroundColor: '#FFFFFF',
    padding: spacing.lg,
    paddingVertical: spacing.xxl,
  },
  atelierHeader: {
    marginBottom: spacing.xl,
    gap: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    paddingBottom: spacing.lg,
  },
  atelierTitle: {
    fontFamily: 'Newsreader',
    fontSize: 40,
    fontWeight: '300',
    color: colors.onSurface,
  },
  archiveLink: {
    alignItems: 'center',
    marginTop: spacing.md,
  },
  archiveLinkText: {
    fontFamily: 'Manrope',
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: colors.onSurface,
  },

  // Process
  processSection: {
    backgroundColor: colors.primary,
  },
  processImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    opacity: 0.5,
  },
  processContent: {
    padding: spacing.lg,
    paddingVertical: spacing.xxl,
    gap: spacing.lg,
  },
  processTitle: {
    fontFamily: 'Newsreader',
    fontSize: 40,
    lineHeight: 44,
    fontWeight: '200',
    color: '#FFFFFF',
  },
  processBody: {
    fontFamily: 'Manrope',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '300',
    color: 'rgba(255,255,255,0.6)',
    maxWidth: 320,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
    paddingTop: spacing.lg,
    marginTop: spacing.md,
  },
  stat: {
    flex: 1,
    gap: spacing.xs,
  },
  statNumber: {
    fontFamily: 'Newsreader',
    fontSize: 32,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  statLabel: {
    fontFamily: 'Manrope',
    fontSize: 8,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.3)',
  },

  // Bespoke CTA
  bespokeCta: {
    padding: spacing.lg,
    paddingVertical: spacing.xxxl,
    alignItems: 'center',
    gap: spacing.lg,
    backgroundColor: colors.surface,
  },
  bespokeTitle: {
    fontFamily: 'Newsreader',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '300',
    color: colors.onSurface,
    textAlign: 'center',
  },
  bespokeBody: {
    ...typography.body,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 24,
    color: 'rgba(26,26,26,0.6)',
    maxWidth: 300,
  },
});
