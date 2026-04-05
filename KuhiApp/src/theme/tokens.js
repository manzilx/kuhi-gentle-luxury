export const colors = {
  primary: '#000000',
  onPrimary: '#FFFFFF',
  secondary: '#775A19',
  surface: '#FCF9F8',
  onSurface: '#1A1A1A',
  surfaceVariant: '#E4E2E1',
  onSurfaceVariant: '#444748',
  outline: '#747878',
  outlineVariant: '#C4C7C7',
  surfaceContainerLow: '#f6f3f2',
  surfaceContainerHigh: '#eae7e7',
  surfaceContainerHighest: '#e4e2e1',

  // Dark theme
  darkBg: '#1b1c1c',
  darkCard: '#252626',
  darkBorder: 'rgba(255,255,255,0.05)',
};

export const fonts = {
  headline: 'Newsreader',
  headlineItalic: 'Newsreader-Italic',
  body: 'Manrope',
  bodyLight: 'Manrope-Light',
  bodySemiBold: 'Manrope-SemiBold',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const typography = {
  heroTitle: {
    fontFamily: 'Newsreader',
    fontSize: 56,
    lineHeight: 56,
    fontWeight: '200',
    letterSpacing: -2,
    color: colors.onSurface,
  },
  sectionTitle: {
    fontFamily: 'Newsreader',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '300',
    letterSpacing: -0.5,
    color: colors.onSurface,
  },
  productTitle: {
    fontFamily: 'Newsreader',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '300',
    color: colors.onSurface,
  },
  label: {
    fontFamily: 'Manrope',
    fontSize: 9,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontWeight: '500',
    color: colors.onSurfaceVariant,
  },
  body: {
    fontFamily: 'Manrope',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '300',
    color: colors.onSurfaceVariant,
  },
  price: {
    fontFamily: 'Newsreader',
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'italic',
    color: colors.onSurface,
  },
};
