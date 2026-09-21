export function Mark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="16" cy="16" r="11" stroke="#C0562A" strokeWidth="1.6" />
      <path
        d="M16 7.5 L22 11.5 L19.7 19 L12.3 19 L10 11.5 Z"
        stroke="#C0562A"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="15" r="3" fill="#C0562A" />
    </svg>
  );
}
