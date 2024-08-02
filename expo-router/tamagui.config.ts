import { color, radius, size, space, themes, zIndex } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'
import { config as configBase } from '@tamagui/config/v3'

const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
})

export const config = createTamagui({
  ...configBase,
  tokens,
  themes: {
    ...themes,
    light: {
      ...themes.light,
      cardBackground: '#fff',
      borderColor: '#ccc',
      errorColor: '#c00',
      background: '#ffa500',
      borderColorFocus: '#000',
      main: '#c4a1ff',
      shadowColor: '#000',
    },
    dark: {
      ...themes.dark,
      cardBorderColor: '#000',
      cardBackground: '#272933',
      cardImageBorderColor: '#000',
      errorColor: '#fff',

      borderColor: '#000',
      background: '#1d1f27',
      borderColorFocus: '#fff',
      main: '#fd9745',
      shadowColor: '#000',
      inputBorderColor: '#000',
      inputBackground: '#272933',
      inputBorderColorFocus: '#fff',
    },
  },
},)

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
