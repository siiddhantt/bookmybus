import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width="15"
    height="15"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6.5 0C10.089 0 13 2.91 13 6.5C13 10.09 10.089 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0ZM6.5 1.08333C3.50831 1.08333 1.08333 3.50831 1.08333 6.5C1.08333 9.49169 3.50831 11.9167 6.5 11.9167C9.49106 11.9167 11.9167 9.49132 11.9167 6.5C11.9167 3.50868 9.49106 1.08333 6.5 1.08333ZM6.22917 3.25005C6.52832 3.25005 6.77083 3.49256 6.77083 3.79171V6.55616L9.41122 7.62281C9.6886 7.73487 9.82262 8.05056 9.71057 8.32794C9.59851 8.60531 9.28282 8.73933 9.00544 8.62728L6.02628 7.42377C5.82154 7.34106 5.6875 7.14235 5.6875 6.92154V3.79171C5.6875 3.49256 5.93001 3.25005 6.22917 3.25005Z"
      fill="rgba(255, 255, 255, 0.6)"
    />
  </Svg>
);

export default SvgComponent;
