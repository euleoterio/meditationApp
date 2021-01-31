import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={415}
      height={351}
      viewBox="0 0 415 351"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M-58.562 208.085c54.125 29.543 122.18 16.22 161.193-31.558 4.317-5.287 11.953-6.407 17.616-2.596l23.104 15.543c6.407 4.312 7.754 13.158 2.962 19.22a181.306 181.306 0 01-43.249 39.497c-19.805 12.933-41.657 21.804-64.957 26.366-23.3 4.562-46.883 4.586-70.094.075-19.377-3.768-37.796-10.567-54.93-20.275-6.72-3.808-8.803-12.511-4.493-18.922l15.55-23.112c3.813-5.665 11.31-7.509 17.298-4.238zM109.772 103.001C94.802 43.181 38.871 2.183-22.702 5.888c-6.814.41-12.814-4.448-13.85-11.192l-4.236-27.522c-1.177-7.635 4.417-14.62 12.123-15.206a181.391 181.391 0 0158.356 5.022c22.933 5.793 44.269 15.848 63.416 29.882C112.252.906 128.26 18.228 140.68 38.352a181.187 181.187 0 0122.331 54.128c1.759 7.523-3.228 14.953-10.866 16.129l-27.536 4.235c-6.746 1.04-13.183-3.223-14.837-9.843zM278.047 58.894c61.01-9.1 107.251-60.777 109.524-122.396.253-6.82 5.67-12.315 12.485-12.697l27.812-1.55c7.714-.429 14.131 5.813 13.967 13.533a181.166 181.166 0 01-10.654 57.573c-7.987 22.255-20.066 42.51-35.896 60.202-15.83 17.69-34.627 31.937-55.866 42.346a181.436 181.436 0 01-56.055 16.977c-7.658 1.019-14.577-4.661-15.007-12.372l-1.55-27.803c-.373-6.813 4.49-12.806 11.24-13.813zM317.926 179.206c31.441 53.045 96.753 76.354 154.697 55.206 6.412-2.34 13.549.597 16.47 6.766l11.924 25.165c3.306 6.979-.055 15.272-7.271 18.036a181.337 181.337 0 01-57.356 11.864c-23.632 1.002-46.95-2.534-69.312-10.513-22.361-7.979-42.648-20.005-60.298-35.739a181.19 181.19 0 01-36.867-45.489c-3.831-6.705-1.177-15.252 5.803-18.562l25.174-11.927c6.171-2.922 13.559-.677 17.036 5.193z"
        fill="#FAF8F5"
      />
    </Svg>
  );
}

export default SvgComponent;
