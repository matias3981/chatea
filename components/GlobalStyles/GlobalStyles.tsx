import { createGlobalStyle } from 'styled-components';
import { QUERIES } from '../../constants/breakpoints';

export const GlobalStyles = createGlobalStyle`
/**
 * @license
 *
 * Font Family: Satoshi
 * Designed by: Deni Anggara
 * URL: https://www.fontshare.com/fonts/satoshi
 * © 2022 Indian Type Foundry
 *
 * Font Styles:
 * Satoshi Variable(Variable font)
 * Satoshi Variable Italic(Variable font)
 * Satoshi Light
 * Satoshi Light Italic
 * Satoshi Regular
 * Satoshi Italic
 * Satoshi Medium
 * Satoshi Medium Italic
 * Satoshi Bold
 * Satoshi Bold Italic
 * Satoshi Black
 * Satoshi Black Italic
 *
*/


/**
* This is a variable font
* You can controll variable axes as shown below:
* font-variation-settings: 'wght' 900.0;
*
* available axes:

* 'wght' (range from 300.0 to 900.0)

*/

@font-face {
  font-family: 'Satoshi-Variable';
  src: url('../fonts/Satoshi-Variable.woff2') format('woff2'),
       url('../fonts/Satoshi-Variable.woff') format('woff'),
       url('../fonts/Satoshi-Variable.ttf') format('truetype');
       font-weight: 300 900;
       font-display: swap;
       font-style: normal;
}


/**
* This is a variable font
* You can controll variable axes as shown below:
* font-variation-settings: 'wght' 900.0;
*
* available axes:

* 'wght' (range from 300.0 to 900.0)

*/

@font-face {
  font-family: 'Satoshi-VariableItalic';
  src: url('../fonts/Satoshi-VariableItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-VariableItalic.woff') format('woff'),
       url('../fonts/Satoshi-VariableItalic.ttf') format('truetype');
       font-weight: 300 900;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Light';
  src: url('../fonts/Satoshi-Light.woff2') format('woff2'),
       url('../fonts/Satoshi-Light.woff') format('woff'),
       url('../fonts/Satoshi-Light.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-LightItalic';
  src: url('../fonts/Satoshi-LightItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-LightItalic.woff') format('woff'),
       url('../fonts/Satoshi-LightItalic.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Regular';
  src: url('../fonts/Satoshi-Regular.woff2') format('woff2'),
       url('../fonts/Satoshi-Regular.woff') format('woff'),
       url('../fonts/Satoshi-Regular.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-Italic';
  src: url('../fonts/Satoshi-Italic.woff2') format('woff2'),
       url('../fonts/Satoshi-Italic.woff') format('woff'),
       url('../fonts/Satoshi-Italic.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Medium';
  src: url('../fonts/Satoshi-Medium.woff2') format('woff2'),
       url('../fonts/Satoshi-Medium.woff') format('woff'),
       url('../fonts/Satoshi-Medium.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-MediumItalic';
  src: url('../fonts/Satoshi-MediumItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-MediumItalic.woff') format('woff'),
       url('../fonts/Satoshi-MediumItalic.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Bold';
  src: url('../fonts/Satoshi-Bold.woff2') format('woff2'),
       url('../fonts/Satoshi-Bold.woff') format('woff'),
       url('../fonts/Satoshi-Bold.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-BoldItalic';
  src: url('../fonts/Satoshi-BoldItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-BoldItalic.woff') format('woff'),
       url('../fonts/Satoshi-BoldItalic.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: italic;
}


@font-face {
  font-family: 'Satoshi-Black';
  src: url('../fonts/Satoshi-Black.woff2') format('woff2'),
       url('../fonts/Satoshi-Black.woff') format('woff'),
       url('../fonts/Satoshi-Black.ttf') format('truetype');
       font-weight: 900;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Satoshi-BlackItalic';
  src: url('../fonts/Satoshi-BlackItalic.woff2') format('woff2'),
       url('../fonts/Satoshi-BlackItalic.woff') format('woff'),
       url('../fonts/Satoshi-BlackItalic.ttf') format('truetype');
       font-weight: 900;
       font-display: swap;
       font-style: italic;
}
  /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
  font-family: 'Satoshi-Variable';
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-image: ${(props) => props.theme.backgroundColor.mobile};
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
  height: 100%;
}

@media ${QUERIES.laptopAndUp} {
  body {
    background-image: ${(props) => props.theme.backgroundColor.desktop};
  }
}
`;
