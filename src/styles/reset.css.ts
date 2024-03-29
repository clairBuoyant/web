import { globalStyle } from '@vanilla-extract/css';

globalStyle(`*, *::before, *::after`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`*`, {
  margin: 0,
});

globalStyle(`html, body`, {
  height: `100%`,
});

globalStyle(`body`, {
  WebkitFontSmoothing: `antialiased`,
  lineHeight: 1.5,
});

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});

globalStyle(`p, h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
});

globalStyle(`#root`, {
  isolation: `isolate`,
});
