import * as React from 'react';
import { SVGProps } from 'react';

const GithubLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={85.333}
    height={85.333}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      d="M21.4 1C12.8 3.7 3.4 13.3 1 21.8-.5 27.3-.2 38 1.6 43.3 4.5 52 16.5 62.6 22.3 61.8c1.7-.2 2.3-1.1 2.5-3.5.3-2.9 0-3.3-2-3.3-4.6 0-6.9-1.3-9.8-5.6-3.4-5-2.6-5.8 1.3-1.4 2.1 2.4 3.5 3 6.6 3 2.8 0 4-.5 4.5-1.7.3-1 .9-2.4 1.2-3.1.4-.7-.2-1.2-1.6-1.2-1.1 0-3.8-.9-5.9-2-6.1-3-8.9-12.2-5.6-18 .8-1.4 1.4-4.4 1.5-6.8 0-4.5 1.2-5.2 5.3-3 1.2.6 6.4 1.1 11.7 1.1 5.3 0 10.5-.5 11.7-1.1 4.1-2.2 5.3-1.5 5.3 3 .1 2.4.7 5.4 1.5 6.8 3.3 5.8.5 15-5.6 18-2.1 1.1-4.7 2-5.9 2-2.1 0-2.6 1-1.1 2.6.6.5 1.1 3.8 1.3 7.4.3 5.8.5 6.5 2.5 6.8 6 .9 17.9-9.9 20.8-18.9 2.4-7 1.7-19.8-1.3-25.6C57.9 11 53.8 6.8 47.8 3.5 43.2 1 41.3.5 33.5.3 28.6.2 23.1.5 21.4 1z"
      fill="currentColor"
    />
  </svg>
);

export default GithubLogo;
