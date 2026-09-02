type P = { className?: string };

export function HtmlIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M6 4h36l-3.3 37L24 45 9.3 41 6 4z" fill="#E44D26" />
      <path d="M24 7v35.7l11.8-3.3L38.6 7H24z" fill="#F16529" />
      <path
        d="M24 20.5h-6.2l-.4-4.4H24V12H13l1.2 12.9H24v-4.4zm0 11.4-5.2-1.4-.3-3.7h-4.2l.7 7.6L24 36.6v-4.7z"
        fill="#EBEBEB"
      />
      <path
        d="M24 20.5v4.4h5.7l-.5 6-5.2 1.4v4.7l9.5-2.6 1.7-19.4H24V20.5z"
        fill="#fff"
      />
    </svg>
  );
}

export function CssIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M6 4h36l-3.3 37L24 45 9.3 41 6 4z" fill="#1572B6" />
      <path d="M24 7v35.7l11.8-3.3L38.6 7H24z" fill="#33A9DC" />
      <path
        d="M24 20.5h-6.2l-.4-4.4H24V12H13l1.2 12.9H24v-4.4zm0 11.4-5.2-1.4-.3-3.7h-4.2l.7 7.6L24 36.6v-4.7z"
        fill="#EBEBEB"
      />
      <path
        d="M24 20.5v4.4h5.7l-.5 6-5.2 1.4v4.7l9.5-2.6 1.7-19.4H24V20.5z"
        fill="#fff"
      />
    </svg>
  );
}

export function JsIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="3" fill="#F7DF1E" />
      <path
        d="M25.6 37.2c1 1.7 2.3 3 4.7 3 2 0 3.3-1 3.3-2.4 0-1.7-1.3-2.3-3.6-3.3l-1.2-.5c-3.5-1.5-5.8-3.4-5.8-7.3 0-3.6 2.8-6.4 7.1-6.4 3.1 0 5.3 1.1 6.9 3.9l-3.8 2.4c-.8-1.5-1.7-2.1-3.1-2.1-1.4 0-2.3.9-2.3 2.1 0 1.4.9 2 3 2.9l1.2.5c4.1 1.8 6.5 3.5 6.5 7.5 0 4.3-3.4 6.7-8 6.7-4.5 0-7.4-2.1-8.8-4.9l3.9-2.5zM11 37.6l3.9-2.4c.8 1.3 1.4 2.5 3 2.5 1.5 0 2.5-.6 2.5-3V20.7h4.8v14.1c0 5-2.9 7.2-7.1 7.2-3.8 0-6-2-7.1-4.4z"
        fill="#000"
      />
    </svg>
  );
}

export function ReactIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="4" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="2">
        <ellipse cx="24" cy="24" rx="19" ry="7.5" />
        <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(120 24 24)" />
      </g>
    </svg>
  );
}

export function NextIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#000" stroke="#fff" strokeWidth="1.5" />
      <path d="M17 33V15h2.4l13.2 17.4" stroke="#fff" strokeWidth="2.4" fill="none" />
      <path d="M31.4 15h2.4v14" stroke="#fff" strokeWidth="2.4" fill="none" />
    </svg>
  );
}

export function TailwindIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 32" className={className} aria-hidden="true">
      <path
        d="M14 3c-5 0-8.2 2.5-9.5 7.5 2-2.5 4.3-3.5 7-2.8 1.5.4 2.6 1.5 3.9 2.8 2 2.1 4.4 4.5 9.6 4.5 5 0 8.2-2.5 9.5-7.5-2 2.5-4.3 3.4-7 2.8-1.5-.4-2.6-1.5-3.9-2.8C21.6 5.4 19.2 3 14 3zM4.5 16C-.5 16-3.7 18.5-5 23.5c2-2.5 4.3-3.5 7-2.8"
        fill="none"
      />
      <path
        d="M15 5c-5.5 0-8.9 2.8-10.3 8.3 2.1-2.8 4.6-3.8 7.6-3.1 1.7.4 2.9 1.7 4.2 3.1 2.2 2.3 4.7 4.9 10.3 4.9 5.5 0 9-2.8 10.3-8.3-2.1 2.8-4.6 3.8-7.6 3.1-1.7-.4-2.9-1.7-4.2-3.1C23.1 7.6 20.6 5 15 5zM4.7 17.7C-.8 17.7-4.3 20.5-5.6 26c2.1-2.8 4.6-3.8 7.6-3.1"
        fill="#38BDF8"
      />
      <path
        d="M13.7 13.6c-5.5 0-9 2.8-10.3 8.3 2.1-2.8 4.6-3.8 7.6-3.1 1.7.4 2.9 1.7 4.2 3.1 2.2 2.3 4.7 4.9 10.3 4.9 5.5 0 9-2.8 10.3-8.3-2.1 2.8-4.6 3.8-7.6 3.1-1.7-.4-2.9-1.7-4.2-3.1-2.2-2.3-4.7-4.9-10.3-4.9z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function NodeIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 3 43 14v20L24 45 5 34V14L24 3z"
        fill="none"
        stroke="#68A063"
        strokeWidth="2.5"
      />
      <path
        d="M24 34c-4.4 0-7-2-7-5h3.4c0 1.4 1.3 2.2 3.6 2.2 2.2 0 3.3-.8 3.3-2 0-1.3-1-1.8-3.6-2.3-3.9-.7-6.4-1.9-6.4-5.1 0-2.9 2.5-4.8 6.5-4.8 4.1 0 6.6 1.9 6.6 5h-3.4c0-1.4-1.2-2.1-3.2-2.1-2 0-3 .7-3 1.8 0 1.2 1 1.6 3.7 2.1 4 .8 6.3 1.9 6.3 5.2 0 3.1-2.6 5-6.8 5z"
        fill="#68A063"
      />
    </svg>
  );
}

export function GithubIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="#fff">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.4.9.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.5 3.5 18.5 3.8 18.5 3.8c.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}
