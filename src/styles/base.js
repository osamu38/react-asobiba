/* eslint-disable no-unused-expressions */

import { injectGlobal } from 'styled-components';

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    text-size-adjust: 100%;
  }
  body {
    position: relative;
    min-height: 100%;
    font-family: 'Source Sans Pro', Helvetica, Arial, 游ゴシック体, YuGothic, メイリオ, Meiryo, sans-serif;
    font-size: 14px;
    color: #555;
    line-height: 1;
    background-color: #fff;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
    -webkit-touch-callout: none;
  }
  hr {
    margin: 0;
  }
  span,
  i {
    display: inline-block;
    vertical-align: middle;
  }
  li {
    list-style: none;
  }
  input,
  textarea,
  button {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    border-radius: 0;
    background-color: inherit;
    color: inherit;
    vertical-align: middle;
    appearance: none;
  }
  select {
    border-radius: 0;
  }
  input:-webkit-autofill,
  textarea:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset;
  }
`;
