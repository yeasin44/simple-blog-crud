import React from "react";

const Loader = ({ props }) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.9999 2.83337V8.66671M46.5832 6.74171L43.6666 11.7934M57.2582 17.4167L52.2066 20.3334M61.1666 32H55.3332M57.2582 46.5834L52.2066 43.6667M46.5832 57.2584L43.6666 52.2067M31.9999 61.1667V55.3334M17.4166 57.2584L20.3333 52.2067M6.74158 46.5834L11.7933 43.6667M2.83325 32H8.66658M6.74158 17.4167L11.7933 20.3334M17.4166 6.74171L20.3333 11.7934"
        stroke="#A77A13"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Loader;
