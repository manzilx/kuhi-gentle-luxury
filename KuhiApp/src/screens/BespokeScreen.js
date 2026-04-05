import React, { useState } from 'react';
import {
  View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions,
} from 'react-native';
import { colors, spacing } from '../theme/tokens';
import SectionLabel from '../components/SectionLabel';
import GhostButton from '../components/GhostButton';
import Footer from '../components/Footer';

const { height } = Dimensions.get('window');

const steps = [
  {
    num: '01',
    title: 'The Consultation',
    desc: 'A private session to explore textures, color palettes, and silhouettes. We discuss the occasion, your personal style, and the rich history of the weaves you choose.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8BaKw9K31ed9w1AtSOTH1-amBFrl_C7v_3pzdKtEZMtLthO5QjAZ9K6xMdWlcIGQL-gkD0EiE22BGFzbhwYzNu6s0smTPZREp9BccML5UQ70gmOVxKLsc4x5Mbxkly0AbaqYPgEQmNKxNPqNAMkCJ5MHkc-6cTDIQCh1-I6PCQCEfoXv-BGl5TMNeYdv_3K-3XERUwipRI-VCCrQAS9OqnFq2Tf0G1lYJhTsMmQtY8Pro_jIpk4ano0H0yPDZrU2mgcDkG2dtIe2-',
  },
  {
    num: '02',
    title: 'The Toile & Fitting',
    desc: "We create a prototype 'toile' to perfect the fit. This architectural stage ensures the drape is impeccable before the final silk is ever touched.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBqcmgxVmRZsJop5klFrM1cg7nG81S9B_O61YjdaoA1HugLusnNXGwLMM4ANdQP4MssQ7NidYtnti3BnntfabuQdfxmCh8A3OoIBF9mpcOjY3FA5erU00DjJ2lB64JfuMGZltPPZBYFuF85dfrdQwYaveN1pnjHg6QDt2h4ewu7QI5fcVYE6e4ca1gCEc9Mbd632ngpdL8lrKC4XUA_2G7etKoFMuIF0CH2ImEhe8fvzekuo2pesLjGuSj4J4FW6bzYdkwPkimGjcR',
  },
  {
    num: '03',
    title: 'The Final Loom',
    desc: 'Your garment is hand-woven by our master artisans. The final result is a masterpiece of Assamese couture, uniquely yours.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA31qMF4qAL9wfKdUvW0FJn7b7MZpoWUDP1P0j53nVee-LDJym0_0UHxErscHJFanG2U78_d2PlfYYJpHKdyZT1nnvziQoTPx6f0rUpIsCWoMCJXelg4ciET_HmFqMpWfkoIkg8Tr_yQZIjzUqaTh-ynHdEXv9eSsJm7X8ZfKOoNuZRny0ZlvC0K2-JB9xxQqANLxwFaSRj5FwRhJdIoE8PpIGfH7KsBMWFkpBrchp0eEkaf_8q0IXOpnwDsrt4niZDiHtUWPWKd9a',
  },
];

export default function BespokeScreen() {
  const [form, setForm] = useState({ name: '', email: '', occasion: '', message: '' });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero */}
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrTIb73Znsn--8w0cow0XZt4xtZdySnTFsu7LM4bCPlPBLPp9GqJlccpCfKRNoOYiH9kWpgaprXZeEaJUcVOnPDZmL9r8zYY_9zXqtBfOkUBJdbE27FAsqldX7aIteN-vellIHn6GqrTrjtabZlaS5GWB1m0CavjvpPG2F9k4hJJ65BYKAM8VItuRGMK7WXJsYJMLY_aBpHuZ-9GMeU471QXJrTavya0hEh5WYTj-UhXVzQBa0h9ngGSdg_kOBAssLcTdOzYRByvgh' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <SectionLabel gold>L'Atelier Priv&eacute;</SectionLabel>
          <Text style={styles.heroTitle}>
            Bespoke{'\n'}Couture
          </Text>
          <Text style={styles.heroSubtitle}>
            <Text style={{ fontStyle: 'italic', fontWeight: '200', opacity: 0.8 }}>Your Legacy, Woven.</Text>
          </Text>
          <Text style={styles.heroBody}>
            Step into a realm where traditional Assamese Muga and Paat silk meet the precision of master tailoring.
          </Text>
          <GhostButton title="Begin Your Journey" light />
        </View>
      </View>

      {/* Process Section */}
      <View style={styles.processSection}>
        <Text style={styles.processHeading}>
          The Art of the{'\n'}
          <Text style={{ fontStyle: 'italic' }}>Crafted Silhouette</Text>
        </Text>
        <View style={styles.processDivider} />
        <Text style={styles.processIntro}>
          The KUHI bespoke experience is a meticulous three-stage evolution, ensuring every thread aligns with your essence.
        </Text>

        {steps.map((step, i) => (
          <View key={step.num} style={styles.stepCard}>
            <Image source={{ uri: step.image }} style={styles.stepImage} />
            <View style={styles.stepContent}>
              <Text style={styles.stepWatermark}>{step.num}</Text>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDesc}>{step.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Inquiry Form */}
      <View style={styles.formSection}>
        <SectionLabel gold>Private Appointments</SectionLabel>
        <Text style={styles.formHeading}>
          Request an{'\n'}
          <Text style={{ fontStyle: 'italic', fontWeight: '200' }}>Atelier Session</Text>
        </Text>
        <Text style={styles.formIntro}>
          Connect with our design team to begin your bespoke journey. We offer both in-atelier and virtual consultations.
        </Text>

        <View style={styles.locations}>
          <View style={styles.location}>
            <Text style={styles.locationLabel}>Flagship Atelier</Text>
            <Text style={styles.locationName}>Guwahati, Assam</Text>
          </View>
          <View style={styles.location}>
            <Text style={styles.locationLabel}>International Showroom</Text>
            <Text style={styles.locationName}>Mayfair, London</Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.formRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Alexander Rowe"
                placeholderTextColor="rgba(255,255,255,0.1)"
                value={form.name}
                onChangeText={(v) => setForm({ ...form, name: v })}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="studio@client.com"
                placeholderTextColor="rgba(255,255,255,0.1)"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(v) => setForm({ ...form, email: v })}
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Occasion / Interest</Text>
            <TextInput
              style={styles.input}
              placeholder="Wedding Couture, Custom Shirting..."
              placeholderTextColor="rgba(255,255,255,0.1)"
              value={form.occasion}
              onChangeText={(v) => setForm({ ...form, occasion: v })}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Message</Text>
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Share your vision with us..."
              placeholderTextColor="rgba(255,255,255,0.1)"
              multiline
              value={form.message}
              onChangeText={(v) => setForm({ ...form, message: v })}
            />
          </View>
          <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
            <Text style={styles.submitText}>Submit Inquiry</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quote */}
      <View style={styles.quoteSection}>
        <Text style={styles.quoteIcon}>&ldquo;</Text>
        <Text style={styles.quoteText}>
          True luxury is not just what you wear, but the whisper of the loom that brought it to life.
        </Text>
        <View style={styles.quoteDivider} />
        <Text style={styles.quoteAuthor}>Aruna Das, Master Weaver</Text>
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },

  // Hero
  hero: {
    height: height * 0.85,
    justifyContent: 'flex-end',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    opacity: 0.4,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(27,28,28,0.3)',
  },
  heroContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
    gap: spacing.md,
  },
  heroTitle: {
    fontFamily: 'Newsreader',
    fontSize: 56,
    lineHeight: 54,
    fontWeight: '400',
    letterSpacing: -2,
    color: '#FFFFFF',
  },
  heroSubtitle: {
    fontFamily: 'Newsreader',
    fontSize: 48,
    lineHeight: 50,
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: -1.5,
  },
  heroBody: {
    fontFamily: 'Manrope',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '300',
    color: 'rgba(255,255,255,0.5)',
    maxWidth: 320,
  },

  // Process
  processSection: {
    backgroundColor: colors.darkBg,
    padding: spacing.lg,
    paddingVertical: spacing.xxl,
    borderTopWidth: 1,
    borderTopColor: colors.darkBorder,
  },
  processHeading: {
    fontFamily: 'Newsreader',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '300',
    letterSpacing: -1,
    color: '#FFFFFF',
    marginBottom: spacing.lg,
  },
  processDivider: {
    width: 48,
    height: 1,
    backgroundColor: colors.secondary,
    marginBottom: spacing.lg,
  },
  processIntro: {
    fontFamily: 'Manrope',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '300',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: spacing.xxl,
    maxWidth: 280,
  },
  stepCard: {
    marginBottom: spacing.xxl,
  },
  stepImage: {
    width: '100%',
    aspectRatio: 4 / 5,
    resizeMode: 'cover',
    opacity: 0.8,
    backgroundColor: colors.darkCard,
  },
  stepContent: {
    paddingTop: spacing.lg,
  },
  stepWatermark: {
    fontFamily: 'Newsreader',
    fontSize: 80,
    color: 'rgba(255,255,255,0.05)',
    lineHeight: 80,
    marginBottom: -24,
  },
  stepTitle: {
    fontFamily: 'Newsreader',
    fontSize: 24,
    fontWeight: '300',
    color: '#FFFFFF',
    marginBottom: spacing.sm,
    letterSpacing: -0.5,
  },
  stepDesc: {
    fontFamily: 'Manrope',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '300',
    color: 'rgba(255,255,255,0.4)',
    maxWidth: 320,
  },

  // Form
  formSection: {
    backgroundColor: colors.darkBg,
    padding: spacing.lg,
    paddingVertical: spacing.xxl,
    gap: spacing.md,
  },
  formHeading: {
    fontFamily: 'Newsreader',
    fontSize: 40,
    lineHeight: 44,
    fontWeight: '300',
    letterSpacing: -1,
    color: '#FFFFFF',
  },
  formIntro: {
    fontFamily: 'Manrope',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '300',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: spacing.lg,
  },
  locations: {
    gap: spacing.lg,
    marginBottom: spacing.xl,
  },
  location: {
    gap: spacing.xs,
  },
  locationLabel: {
    fontFamily: 'Manrope',
    fontSize: 8,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.3)',
  },
  locationName: {
    fontFamily: 'Newsreader',
    fontSize: 18,
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  form: {
    gap: spacing.xl,
  },
  formRow: {
    gap: spacing.xl,
  },
  inputGroup: {
    gap: spacing.sm,
  },
  inputLabel: {
    fontFamily: 'Manrope',
    fontSize: 8,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    color: '#FFFFFF',
    fontFamily: 'Manrope',
    fontSize: 14,
    paddingVertical: 12,
    fontWeight: '300',
  },
  submitBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 22,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  submitText: {
    fontFamily: 'Manrope',
    fontSize: 10,
    letterSpacing: 4,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: colors.primary,
  },

  // Quote
  quoteSection: {
    backgroundColor: colors.darkBg,
    paddingVertical: spacing.xxxl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.darkBorder,
  },
  quoteIcon: {
    fontFamily: 'Newsreader',
    fontSize: 48,
    color: colors.secondary,
    opacity: 0.5,
    marginBottom: spacing.md,
  },
  quoteText: {
    fontFamily: 'Newsreader',
    fontSize: 24,
    lineHeight: 34,
    fontStyle: 'italic',
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  quoteDivider: {
    width: 32,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: spacing.lg,
  },
  quoteAuthor: {
    fontFamily: 'Manrope',
    fontSize: 8,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
  },
});
