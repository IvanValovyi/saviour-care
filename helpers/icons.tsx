interface Props {
  className?: string;
}

export const Arrow = ({ className }: Props) => {
  return (
    <svg
      width="34"
      height="23"
      viewBox="0 0 34 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
    >
      <g>
        <path
          d="M29.9392 10.1062L7.76437 10.1062L12.6361 4.80093C13.3081 4.06916 13.3081 2.97151 12.6361 2.23974C11.9642 1.50798 10.9562 1.50798 10.2842 2.23974L2.55665 10.6551C1.88468 11.3868 1.88468 12.4845 2.55665 13.2162L10.2842 21.6316C10.9562 22.3633 11.9642 22.3633 12.6361 21.6316C13.3081 20.8998 13.3081 19.8021 12.6361 19.0704L7.76437 13.7651L29.9392 13.7651C30.7792 13.7651 31.6191 13.0333 31.6191 11.9357C31.6191 10.838 30.7792 10.1062 29.9392 10.1062Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export const Menu = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      className={className || ""}
    >
      <path
        d="M3 5H21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12H21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 19H21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Close = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 24 24"
      className={className || ""}
    >
      <g id="grid_system" />
      <g id="_icons">
        <path
          d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
