import { gray, white, blue, red, green, black } from '@pxblue/colors';

export const rntheme = {
  roundness: 3,
  fonts: {
    bold: {
      fontWeight: '600',
    },
    regular: {
      fontWeight: 'normal',
    },
    medium: {
      fontWeight: '400',
    },
    light: {
      fontWeight: '300',
    },
    thin: {
      fontWeight: '200',
    },
  },
  colors: {
    primary: blue[500],
    background: white[500],
    surface: white[200],
    accent: blue[700],
    error: red[500],
    text: black[500],
    onPrimary: white[500],
  },
  sizes: {
    small: 12,
    medium: 14,
    large: 20,
    extraLarge: 34,
  },
};
