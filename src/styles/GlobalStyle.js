const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`
  body {
   font-family: sans-serif;
   width: 1200px;
   margin: 50px auto;
   
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
  }`;
