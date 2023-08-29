import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    id="logout">
    <Path
      fill="rgba(255, 255, 255, 0.6)"
      fill-rule="evenodd"
      d="M10.666 12a6.667 6.667 0 0 1 6.667-6.667h29.334A6.667 6.667 0 0 1 53.332 12v7.333a1.333 1.333 0 0 1-2.666 0V12a4 4 0 0 0-4-4H17.332a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h29.334a4 4 0 0 0 4-4v-7.334a1.333 1.333 0 0 1 2.666 0V52a6.667 6.667 0 0 1-6.666 6.666H17.332A6.667 6.667 0 0 1 10.667 52V12Z"
      clip-rule="evenodd"></Path>
    <Path
      fill="rgba(255, 255, 255, 0.6)"
      fill-rule="evenodd"
      d="M44.39 24.39c-.52.521-.52 1.365 0 1.886l4.391 4.39H28a1.333 1.333 0 1 0 0 2.667H48.78l-4.39 4.39a1.333 1.333 0 1 0 1.885 1.886l6.667-6.666c.52-.52.52-1.365 0-1.886l-6.667-6.666a1.333 1.333 0 0 0-1.886 0Z"
      clip-rule="evenodd"></Path>
  </Svg>
);

export default SvgComponent;
