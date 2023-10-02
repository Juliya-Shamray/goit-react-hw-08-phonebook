const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`
  body {
   font-family: sans-serif;
   margin: 0 auto;
   
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
  }
  .container {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width:320px) {
        max-width: 428px;
}
    @media screen and (min-width:768px) {
        max-width: 768px;
}

    @media screen and (min-width:1158px) {
        max-width: 1158px;
    
}


}`;
