import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={415}
      height={504}
      viewBox="0 0 415 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M.5-1v382.053s32.235 68.735 115.112 60.758c82.877-7.976 100.065-50.935 200.131 28.238 0 0 35.3 33.136 99.757 31.918V-1H.5z"
          fill="#FAF8F5"
        />
        <Path
          d="M402.649 504c-52.794 0-84.077-24.338-84.411-24.619-62.553-49.143-100.9-39.771-153.96-26.781-14.073 3.445-28.64 7.009-45.249 10C37.849 477.232-2.099 434.67-2.5 434.23l.988-.895c.387.427 39.909 42.442 120.287 27.956 16.583-2.99 31.11-6.541 45.169-9.986 53.434-13.07 92.034-22.509 155.109 27.035.387.307 38.346 29.812 101.3 23.417l.134 1.322a172.86 172.86 0 01-17.838.921z"
          fill="#F9F0E3"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(-2.5)" d="M0 0h423v504H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
