import React, { useState } from 'react';
import {
  View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions,
} from 'react-native';
import { colors, typography, spacing } from '../theme/tokens';
import SectionLabel from '../components/SectionLabel';
import PrimaryButton from '../components/PrimaryButton';
import Footer from '../components/Footer';

const { width } = Dimensions.get('window');

const filters = ['All Works', 'Muga Silk', 'Contemporary', 'Bespoke', 'Eri Heritage'];

const items = [
  {
    title: 'The Golden Muga Mekhela',
    subtitle: 'Hand-loomed golden silk',
    price: '\u00a32,65,000',
    desc: "Traditional red 'buta' motifs woven with precision over six months.",
    tag: 'Signature Piece',
    aspect: 4 / 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5igyM8O7ls00xhoCuMdG2RT0tjPQiiPxwoq-uFRR-jvKK8BogxIWEEu7kywW91rgdlso1RIm3MLinBVHjOZbdKPBFevlS7III8k6oOhdpuh1Dcqn8oQxcNO6oNyp5S5xA2yfeLlHdisxFaCNPMmii_TGhdZ8Zf0FP6DG6awnOyCrEfXZsylcSywfOWOuGNfWPGmpiz9Z1F-qZhvrgbncD_Whn8oMmtujEq5M93UiNB_iCVLOLoelXrelW9kEOPZFlKJ1Q_lbS3URR',
  },
  {
    title: 'The Ivory Eri Drape',
    subtitle: 'Natural Ahimsa Silk',
    price: '\u00a31,45,000',
    desc: 'Finished with hand-knotted fringe and raw edge detailing.',
    aspect: 2 / 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB0sA_gYMYOCppAKJDh2tsNvuE6cYXbRB4z8wERxq7qKIXKvHr498WrmE7v3J9lnKNd5k_m_j1_ym9NLFRyHgVkeIslt0r4GUgPffjAKBAk4x_5IE4Z4rfvrjoNwBD_9Bx9RwLmNemU7YorFwHuktOSEZ3NTSL8g0zweZIdlZ77OX4dbUeWJhbEuUSjzr9Pshom3YCLtQ52siKomCOl1XTFNebhpbzloEemAJdY4l4rZcbn4KX1W5pAQ_2IBvUsVyVWu-gXNA4zvIc',
  },
  {
    title: 'Nocturnal Silk Ensemble',
    subtitle: 'Midnight Mulberry Silk',
    price: '\u00a33,80,000',
    desc: 'Architectural draping meeting fluid movement. Bespoke sizing available.',
    aspect: 16 / 10,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDLpYFSRJ-K7h7jWzH6QAeGhPsZh5D3SkOAkBSNesZayFGdwaBxPYDICk3Pg58Zk-vbdbP9imG91fExXG5U9JG-q-sZqoioh1WyHzVTqZY7S6PsgJilcTl-a23_nOf1U3pZ3ZxzPalh5xtZb1XnHKQOve5kZphwlGsm4-4vrnbjr4ZMN77v3gDWKAYF727RY_HC5iOuytwpqZUMUPcLEWVTwAYWLR5cCf8OLZ031T10BZlexp1ZLINcRXXBJO-ZY6X-s9GT0H907Gd',
  },
  {
    title: 'Indigo Soul Wrap',
    subtitle: 'Organic Indigo Eri',
    price: '\u00a395,000',
    desc: 'Each piece carries a unique oceanic gradient.',
    aspect: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG_agA-q5k-JA-yxQ8y2wop-EVxFtvRR616rNbEZ0omFvDUEKp0T1uN_9XNOHXGa8eqJU_hQBx3WpN_vtOP1CTEkHXWNoX1-Pl-b1NhpPySsRZRs_-Xc-v1QPt22g4f41wX0CLvfVr4iti2TxIHWGIRlJoyxS_1bR70V-RznJi7kTNqE34SPFPV1qkAScgk1O9YbtM69Zo51gBJRGjb_g2sObnDoPBFDQY5g3CkR1Cr3QZq8ZuEq006oYUHMH5vKCTwjv8uY2gJObF',
  },
];

export default function CollectionsScreen({ navigation }) {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero */}
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoR3SALwseLuFICpF2MTjLS8XLIatuYXfCpz4gIBefIo493x1jBBIEUGJ4ME9zubzRtXY00utAHanG4RR20ziQCvHE_yOa-y32gxKAMxcIb3FaYoEmB9Ze8jpeEnhaW27drKXPoCwLEuHdKS2teuIIuWl6nQkyMFuvBJf_ITy4O6YTY4slzHqoB1KInVEfg-m6SDtg0_RQ8OQqCTL6tbbcyW2sMKtxwMFQdUGbetdvEPwpCRuhc7NbMMj-nG1PQ80xTf6R9dGQgAKe' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={styles.heroLabel}>A Heritage Reimagined</Text>
          <Text style={styles.heroTitle}>The{'\n'}Collections</Text>
          <Text style={styles.heroSubtitle}>
            From the timeless luster of golden Muga to contemporary silhouettes, each piece is a labor of soul and silence.
          </Text>
        </View>
      </View>

      {/* Filter Bar */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterBar}
        contentContainerStyle={styles.filterContent}
      >
        {filters.map((f, i) => (
          <TouchableOpacity
            key={f}
            onPress={() => setActiveFilter(i)}
            style={[styles.filterPill, activeFilter === i && styles.filterActive]}
          >
            <Text style={[styles.filterText, activeFilter === i && styles.filterTextActive]}>
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Feed */}
      <View style={styles.productFeed}>
        {items.map((item) => (
          <View key={item.title} style={styles.productCard}>
            <View style={[styles.productImageWrap, { aspectRatio: item.aspect }]}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              {item.tag && (
                <View style={styles.productTag}>
                  <Text style={styles.productTagText}>{item.tag}</Text>
                </View>
              )}
            </View>
            <View style={styles.productInfo}>
              <View style={styles.productInfoTop}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={styles.productSubtitle}>{item.subtitle}</Text>
                </View>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
              <View style={styles.productInfoBottom}>
                <Text style={styles.productDesc}>{item.desc}</Text>
                <TouchableOpacity>
                  <Text style={styles.viewLink}>View Piece</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Bespoke CTA */}
      <View style={styles.bespokeCta}>
        <SectionLabel light>The Bespoke Experience</SectionLabel>
        <Text style={styles.bespokeTitle}>
          Craft your legacy with our Master Weavers.
        </Text>
        <Text style={styles.bespokeBody}>
          Collaborate directly with our artisans to design a one-of-a-kind garment.
        </Text>
        <PrimaryButton
          title="Book A Private Consultation"
          inverted
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
    height: 500,
    justifyContent: 'flex-end',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    opacity: 0.4,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  heroContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
    alignItems: 'center',
    gap: spacing.md,
  },
  heroLabel: {
    fontFamily: 'Manrope',
    fontSize: 10,
    letterSpacing: 5,
    textTransform: 'uppercase',
    color: colors.secondary,
  },
  heroTitle: {
    fontFamily: 'Newsreader',
    fontSize: 72,
    lineHeight: 68,
    fontWeight: '200',
    letterSpacing: -3,
    color: colors.onSurface,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontFamily: 'Manrope',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '300',
    fontStyle: 'italic',
    color: colors.onSurfaceVariant,
    textAlign: 'center',
    maxWidth: 320,
  },

  // Filters
  filterBar: {
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(196,199,199,0.2)',
    maxHeight: 56,
  },
  filterContent: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.lg,
    alignItems: 'center',
  },
  filterPill: {
    paddingBottom: 4,
  },
  filterActive: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  filterText: {
    fontFamily: 'Manrope',
    fontSize: 9,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: colors.onSurfaceVariant,
  },
  filterTextActive: {
    color: colors.primary,
    fontWeight: '600',
  },

  // Products
  productFeed: {
    padding: spacing.lg,
    paddingTop: spacing.xl,
    gap: spacing.xl,
  },
  productCard: {
    marginBottom: spacing.md,
  },
  productImageWrap: {
    width: '100%',
    backgroundColor: colors.surfaceContainerLow,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productTag: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  productTagText: {
    fontFamily: 'Manrope',
    fontSize: 8,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: colors.primary,
  },
  productInfo: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  productInfoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196,199,199,0.3)',
    paddingBottom: spacing.sm,
  },
  productTitle: {
    fontFamily: 'Newsreader',
    fontSize: 24,
    fontWeight: '300',
    letterSpacing: -0.5,
    color: colors.onSurface,
    marginBottom: 2,
  },
  productSubtitle: {
    fontFamily: 'Manrope',
    fontSize: 9,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: colors.onSurfaceVariant,
  },
  productPrice: {
    fontFamily: 'Newsreader',
    fontSize: 17,
    fontWeight: '300',
    color: colors.onSurface,
  },
  productInfoBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.xs,
  },
  productDesc: {
    fontFamily: 'Manrope',
    fontSize: 11,
    lineHeight: 16,
    color: colors.onSurfaceVariant,
    flex: 1,
    marginRight: spacing.md,
  },
  viewLink: {
    fontFamily: 'Manrope',
    fontSize: 9,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: colors.primary,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 2,
  },

  // Bespoke
  bespokeCta: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    paddingVertical: spacing.xxxl,
    gap: spacing.lg,
  },
  bespokeTitle: {
    fontFamily: 'Newsreader',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '200',
    letterSpacing: -1,
    color: '#FFFFFF',
  },
  bespokeBody: {
    fontFamily: 'Manrope',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '300',
    color: 'rgba(255,255,255,0.5)',
    maxWidth: 320,
  },
});
