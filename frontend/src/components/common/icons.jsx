/**
 * A small hand-picked set of stroke icons, sized to inherit currentColor.
 * Kept local (no icon-library dependency) to match the "no unnecessary
 * dependencies" requirement.
 */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Icon({ children, size = 18, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...base}
      {...props}
    >
      {children}
    </svg>
  )
}

export const SunIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </Icon>
)

export const MoonIcon = (props) => (
  <Icon {...props}>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
  </Icon>
)

export const SearchIcon = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icon>
)

export const StarIcon = (props) => (
  <Icon {...props}>
    <path d="m12 3 2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6Z" />
  </Icon>
)

export const ForkIcon = (props) => (
  <Icon {...props}>
    <circle cx="6" cy="6" r="2.2" />
    <circle cx="18" cy="6" r="2.2" />
    <circle cx="12" cy="18" r="2.2" />
    <path d="M6 8.2V11a3 3 0 0 0 3 3h1M18 8.2V11a3 3 0 0 1-3 3h-1M12 14v2.2" />
  </Icon>
)

export const RepoIcon = (props) => (
  <Icon {...props}>
    <path d="M5 3.5A1.5 1.5 0 0 1 6.5 2H18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A1.5 1.5 0 0 1 5 20.5v-17Z" />
    <path d="M5 17.5A1.5 1.5 0 0 1 6.5 16H19" />
  </Icon>
)

export const UsersIcon = (props) => (
  <Icon {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 5.2a3.2 3.2 0 0 1 0 6.2M20 20a6 6 0 0 0-4.2-8.4" />
  </Icon>
)

export const UserPlusIcon = (props) => (
  <Icon {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M18 8v6M15 11h6" />
  </Icon>
)

export const MapPinIcon = (props) => (
  <Icon {...props}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </Icon>
)

export const BuildingIcon = (props) => (
  <Icon {...props}>
    <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5V21" />
    <path d="M14 10h4.5A1.5 1.5 0 0 1 20 11.5V21M4 21h16M7.5 8h.01M10.5 8h.01M7.5 12h.01M10.5 12h.01M7.5 16h.01M10.5 16h.01M17 14h.01M17 17h.01" />
  </Icon>
)

export const LinkIcon = (props) => (
  <Icon {...props}>
    <path d="M9.5 14.5 14.5 9.5" />
    <path d="M11 6.5 12.4 5A4 4 0 1 1 18 10.6L16.5 12M13 17.5 11.6 19A4 4 0 1 1 6 13.4L7.5 12" />
  </Icon>
)

export const CalendarIcon = (props) => (
  <Icon {...props}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Icon>
)

export const ExternalLinkIcon = (props) => (
  <Icon {...props}>
    <path d="M14 5h5v5M19 5l-9 9M8 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2" />
  </Icon>
)

export const ActivityIcon = (props) => (
  <Icon {...props}>
    <path d="M3 12h4l2-7 4 14 2-7h6" />
  </Icon>
)

export const CodeIcon = (props) => (
  <Icon {...props}>
    <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
  </Icon>
)

export const GaugeIcon = (props) => (
  <Icon {...props}>
    <path d="M4 14a8 8 0 1 1 16 0" />
    <path d="M12 14 15.5 9.5" />
    <circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none" />
  </Icon>
)

export const AlertIcon = (props) => (
  <Icon {...props}>
    <path d="M12 3 22 20H2Z" />
    <path d="M12 9.5v4.2M12 17h.01" />
  </Icon>
)

export const CompassIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-2 6-6 2 2-6Z" />
  </Icon>
)

export const ArrowRightIcon = (props) => (
  <Icon {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
)

export const MenuIcon = (props) => (
  <Icon {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)

export const CloseIcon = (props) => (
  <Icon {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
)

export const GithubMarkIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="currentColor" aria-hidden="true" className={props.className}>
    <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.79.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.11 0 1.53-.01 2.75-.01 3.13 0 .3.2.66.79.55 4.51-1.51 7.77-5.77 7.77-10.79C23.02 5.24 18.27.5 12 .5Z" />
  </svg>
)
