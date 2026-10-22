import { profile } from "@/data/profile";
export function SocialLinks({ labels = false }: { labels?: boolean }) {
  return (
    <div className={`social-links ${labels ? "with-labels" : ""}`}>
      <a
        href={profile.linkedin}
        aria-label="LinkedIn profile (opens in new tab)"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 9v10M5 5v.01M10 19V9h4v2c2-3 6-2 6 2v6M10 9v10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        {labels && <span>LinkedIn</span>}
      </a>
      <a
        href={`mailto:${profile.email}`}
        aria-label={
          labels ? `Email Saipranay: ${profile.email}` : "Email Saipranay"
        }
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="m4 6 8 7 8-7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {labels && <span>{profile.email}</span>}
      </a>
      <a href="tel:+12034557670" aria-label="Call Saipranay: +1 203 455 7670">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="m8 3 3 5-3 3c1 2 3 4 5 5l3-3 5 3c0 3-2 5-5 4C9 18 5 14 3 7 2 4 5 2 8 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        {labels && <span>+1 203 455 7670</span>}
      </a>
    </div>
  );
}
